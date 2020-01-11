<template>
  <div class="honeycollections-component">
    <h2>Mee võtmised</h2>
    <router-link :to="`/honeycollections/addhoneycollection`"><b-button id="addHoneyCollection" variant="dark">+ Lisa uus</b-button></router-link>
    <v-layout row wrap>
      <v-flex xs3>
        <v-menu
          ref="showStartDate"
          :close-on-content-click="false"
          v-model="showStartDate"
          :return-value.sync="startDate"
          lazy
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="startDate"
            label="Alates"
            readonly
          ></v-text-field>
          <v-date-picker
            v-model="startDate"
            @input="filterStartDate"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs3>
        <v-menu
          ref="showEndDate"
          :close-on-content-click="false"
          v-model="showEndDate"
          :return-value.sync="endDate"
          lazy
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="endDate"
            label="Kuni"
            readonly
          ></v-text-field>
          <v-date-picker
            v-model="endDate"
            @input="filterEndDate"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="honeycollections"
          :pagination.sync="pagination"
          select-all
          item-key="date"
          class="elevation-1"
          :inspections-per-page-items="[-1]"
          :hide-actions=true
          :search="filters"
          :custom-filter="customFilter"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
              >
                {{ header.text }}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <tr>
              <td>{{ props.item.date | formatDate }}</td>
              <td>{{ props.item.amount }} kg</td>
            </tr>
          </template>
        </v-data-table>
        <table id="summary-table">
          <tr>
            <td id="title">Kokku:</td>
            <td id="total">{{ totalHoney }} kg</td>
          </tr>
        </table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import HoneyCollectionService from '@/services/HoneyCollectionService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showStartDate: false,
      showEndDate: false,
      startDate: null,
      endDate: null,
      dates: [],
      honeycollections: [],
      filters: {
        startDate: null,
        endDate: null
      },
      pagination: {
        sortBy: 'date'
      },
      headers: [
        {
          text: 'Kuupäev',
          value: 'kuupaev'
        },
        {
          text: 'Kogus',
          value: 'kogus'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    totalHoney () {
      let totalhoney = []
      Object.entries(this.honeycollections).forEach(([key, val]) => {
        totalhoney.push(val.amount)
      })
      return totalhoney.reduce(function (totalhoney, num) {
        return totalhoney + num
      }, 0)
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.honeycollections = (await HoneyCollectionService.index()).data
    }
  },
  methods: {
    customFilter (items, filters, filter, headers) {
      const cf = new this.$MultiFilters(items, filters, filter, headers)
      cf.registerFilter('startDate', function (startDate, items) {
        if (startDate === null) return items
        return items.filter(item => {
          const inspectionStartDate = new Date(item.date).getTime()
          console.log(inspectionStartDate)
          return inspectionStartDate >= startDate
        }, startDate)
      })
      cf.registerFilter('endDate', function (endDate, items) {
        if (endDate === null) return items
        return items.filter(item => {
          const inspectionEndDate = new Date(item.date).getTime()
          return inspectionEndDate <= endDate
        }, endDate)
      })
      return cf.runFilters()
    },
    toggleAll () {
      if (this.selected.length) {
        this.selected = []
      } else {
        this.selected = this.rows.slice()
      }
    },
    /**
     * Column shorting.
     *
     * @param column
     */
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    filterStartDate (val) {
      this.$refs.showStartDate.save(val)
      const timestamp = new Date(val).getTime()
      this.filters = this.$MultiFilters.updateFilters(this.filters, { startDate: timestamp })
    },
    filterEndDate (val) {
      console.log(val)
      this.$refs.showEndDate.save(val)
      const timestamp = new Date(val).getTime()
      console.log(timestamp)
      this.filters = this.$MultiFilters.updateFilters(this.filters, { endDate: timestamp })
    }
  },
  filters: {
    /**
     * Format a timestamp into a d/m/yyy (because spanish format).
     *
     * @param value
     * @returns {string}
     */
    formatDates: function (value) {
      if (!value) return ''
      return new Date(value).toLocaleDateString('es-ES')
    }
  }
}
</script>

<style scoped>
 a {
   position: absolute;
   margin-top: 10px;
   float: right;
   right: 10%;
 }
 #summary-table {
    width: 100%;
  }
  #summary-table td {
    padding: 15px;
    padding-left: 10%;
    padding-right: 19%;
    border-bottom: 1px lightgray solid;
  }
  #title {
    text-align: left;
  }
  #total {
    text-align: right;
    margin-right: 20px;
  }
  div.flex.xs3 {
    padding-left: 10px;
  }
</style>
