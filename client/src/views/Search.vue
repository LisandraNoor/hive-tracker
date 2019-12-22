<template>
  <div class="search-component">
    <label>Vali ajaperiood:</label><br>
    <date-picker
      id="date"
      v-model="startDate"
      type="date"
      format="DD/MM/YYYY"
      required
    ></date-picker>
    <date-picker
      id="date"
      v-model="endDate"
      type="date"
      format="DD/MM/YYYY"
      required
    ></date-picker>
    <button @click="filteredInspections">Get Range</button><br>
    <h3>Filtered dates</h3>
    <ul id="sortbydate">
      <li v-for="inspection in filteredData" :key="inspection.date">
        {{ inspection.date | formatDate }}
      </li>
    </ul>
    <h3>All dates</h3>
    <ul id="alldates">
      <li v-for="inspection in inspections" :key="inspection.id">
        {{ inspection.date | formatDate }}
      </li>
    </ul>
    <h3>Start date</h3>
    {{ startDate | formatDate }}<br>
    <h3>End date</h3>
    {{ endDate | formatDate }}<br>
    {{ dates }}
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import InspectionService from '@/services/InspectionService'
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      startDate: null,
      endDate: null,
      dates: [],
      inspections: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  components: {
    DatePicker
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
    filteredData () {
      var _ = require('lodash')
      var startDate = moment(String(this.startDate)).format('DD/MMM/YYYY')
      var endDate = moment(String(this.endDate)).format('DD/MMM/YYYY')
      return _.filter(this.inspections, function (inspections) {
        if ((_.isNull(startDate) && _.isNull(endDate))) {
          console.log('wtf')
          return true
        } else {
          var date = moment(String(inspections.date)).format('DD/MMM/YYYY')
          console.log(startDate, ' ', endDate)
          console.log('else: ', date)
          console.log(startDate <= date)
          return (startDate <= date)
        }
      })
    },
    filteredInspections (startDate, endDate) {
      this.filteredData()
      this.dates = []
      // Strip hours minutes seconds etc.
      let currentDate = new Date(
        this.startDate.getFullYear(),
        this.startDate.getMonth(),
        this.startDate.getDate()
      )
      while (currentDate <= this.endDate) {
        this.dates.push(currentDate)
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1 // Will increase month if over range
        )
      }
      console.log(this.dates)
      return this.dates
    }
  }
}
</script>

<style scoped>
</style>
