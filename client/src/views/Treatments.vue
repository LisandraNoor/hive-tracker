<template>
  <div class="treatments-component">
    <h2>Ravimised</h2>
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
          :items="treatments"
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
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.amount }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TreatmentService from '@/services/TreatmentService'
import HiveService from '@/services/HiveService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showStartDate: false,
      showEndDate: false,
      startDate: null,
      endDate: null,
      dates: [],
      treatments: [],
      treatment: null,
      hive: {},
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
          text: 'Tüüp',
          value: 'tuup'
        },
        {
          text: 'Kogus',
          value: 'kogus'
        }
      ]
    }
  },
  async mounted () {
    const hiveId = this.$store.state.route.params.hiveId
    this.hive = (await HiveService.show(hiveId)).data
    this.treatments = (await TreatmentService.index()).data
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
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
</style>
