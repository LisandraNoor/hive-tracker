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
    ></date-picker><br>
    <button @click="getDatesBetween">Get Range</button>
    <label>Vali soovitud sisend:</label><br>
    <div>
      <input type="checkbox">
      <p>Mesi</p>
    </div>
    <ul id="sortbydate">
      <li v-for="inspection in inspections" :key="inspection.id">
        {{ inspection.date }}
      </li>
    </ul>
    <button @click="getRecords()">getRecords</button>
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
      startDate: '',
      endDate: '',
      dates: [],
      inspections: null,
      sortedInsections: []
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
  },
  methods: {
    getDatesBetween (startDate, endDate) {
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
    },
    getRecords () {
      const ins = this.inspections.filter(inspection => moment(inspection.date, 'DD/MM/YYYY').month() === this.startDate)
      console.log(ins)
      return ins
    }
  }
}
</script>

<style scoped>
</style>
