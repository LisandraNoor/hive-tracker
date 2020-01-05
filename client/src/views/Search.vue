<template>
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
        :headers="headers1"
        :items="inspections"
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
            <td>{{ props.item.attitude }}</td>
            <td>{{ props.item.strength }}</td>
            <td>{{ props.item.feedAmount }}</td>
            <td>{{ props.item.frameCoverage }}</td>
            <td>{{ props.item.queen }}</td>
            <td>{{ props.item.queenColor }}</td>
            <td>{{ props.item.stringFrame }}</td>
            <td>{{ props.item.bottomFrame }}</td>
            <td>{{ props.item.fullFrame }}</td>
            <td>{{ props.item.removedFramed }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>
    <v-flex xs12>
      <v-data-table
        :headers="headers2"
        :items="inspections"
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
            <td>{{ props.item.degrees }}</td>
            <td>{{ props.item.weather }}</td>
            <td>{{ props.item.eggs }}
            <td>{{ props.item.eggAmount }}</td>
            <td>{{ props.item.disease }}</td>
            <td>{{ props.item.diseaseType }}</td>
            <td>{{ props.item.furros }}</td>
            <td>{{ props.item.furrosAmount }}</td>
            <td>{{ props.item.haue }}</td>
            <td>{{ props.item.haueAmount }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>
    <table id="summary-table">
      <tr>
        <td>Traadiga raame</td>
        <td>Põhjaga raame</td>
        <td>Täis raamid</td>
        <td>Eemaldatud raamid</td>
      </tr>
      <tr>
        <td>{{ stringFrameTotal }}</td>
        <td>{{ bottomFrameTotal }}</td>
        <td>{{ fullFrameTotal }}</td>
        <td>{{ removedFrameTotal }}</td>
      </tr>
    </table>
  </v-layout>
</template>

<script>
import InspectionService from '@/services/InspectionService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showStartDate: false,
      showEndDate: false,
      startDate: null,
      endDate: null,
      dates: [],
      inspections: [],
      filters: {
        startDate: null,
        endDate: null
      },
      pagination: {
        sortBy: 'date'
      },
      headers1: [
        {
          text: 'Kuupäev',
          value: 'kuupaev'
        },
        {
          text: 'Suhtumine',
          value: 'suhtumine'
        },
        {
          text: 'Tugevus',
          value: 'tugevus'
        },
        {
          text: 'Sööda kogus',
          value: 'soodakogus'
        },
        {
          text: 'Katvus',
          value: 'raamikatvus'
        },
        {
          text: 'Ema',
          value: 'emaolemasolu'
        },
        {
          text: 'Ema värv',
          value: 'emavarv'
        },
        {
          text: 'Traadiga',
          value: 'traadigaraamid'
        },
        {
          text: 'Põhjaga',
          value: 'pohjagaraamid'
        },
        {
          text: 'Ülesehitatud',
          value: 'ulesehitatudraamid'
        },
        {
          text: 'Eemaldatud',
          value: 'eemaldatudraamid'
        }
      ],
      headers2: [
        {
          text: 'Kraadid',
          value: 'kraadid'
        },
        {
          text: 'Ilm',
          value: 'ilm'
        },
        {
          text: 'Munade olemasolu',
          value: 'munadeolemasolu'
        },
        {
          text: 'Munad',
          value: 'munadekogus'
        },
        {
          text: 'Haiguse olemasolu',
          value: 'munadeolemasolu'
        },
        {
          text: 'Haigus',
          value: 'haigusetuup'
        },
        {
          text: 'Vaklade olemasolu',
          value: 'vakladeolemasolu'
        },
        {
          text: 'Vaglad',
          value: 'vakladekogus'
        },
        {
          text: 'Haudme olemasolu',
          value: 'haudmeolemasolu'
        },
        {
          text: 'Haue',
          value: 'haudmekogus'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    stringFrameTotal () {
      let stringFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        stringFrames.push(val.stringFrame)
      })
      return stringFrames.reduce(function (stringFrames, num) {
        return stringFrames + num
      }, 0)
    },
    bottomFrameTotal () {
      let bottomFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        bottomFrames.push(val.bottomFrame)
      })
      return bottomFrames.reduce(function (bottomFrames, num) {
        return bottomFrames + num
      }, 0)
    },
    fullFrameTotal () {
      let fullFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        fullFrames.push(val.fullFrame)
      })
      return fullFrames.reduce(function (fullFrames, num) {
        return fullFrames + num
      }, 0)
    },
    removedFrameTotal () {
      let removedFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        removedFrames.push(val.removedFramed)
      })
      return removedFrames.reduce(function (removedFrames, num) {
        return removedFrames + num
      }, 0)
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.inspections = (await InspectionService.index()).data
    }
    this.inspections.sort(function (startDate, endDate) {
      return new Date(endDate.date) - new Date(startDate.date)
    })
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
  table.v-table tbody td:first-child, table.v-table tbody td:not(:first-child), table.v-table tbody th:first-child, table.v-table tbody th:not(:first-child), table.v-table thead td:first-child, table.v-table thead td:not(:first-child), table.v-table thead th:first-child, table.v-table thead th:not(:first-child) {
    padding: 0 20px;
  }
  #summary-table {
    margin-top: 15px;
    width: 50%;
  }
  #summary-table td {
    padding: 10px;
    border-bottom: 1px lightgray solid;
  }
</style>
