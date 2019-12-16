<template>
  <div class="treatment-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <date-picker
          id="date"
          v-model="treatment.date"
          format="DD/MM/YYYY"
          required
        ></date-picker>
      </b-form-group>

      <b-form-group id="type" label="Ravim">
        <b-form-select
          id="type"
          v-model="treatment.type"
          :options="types"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="amount" label="Doos">
        <b-form-input
          id="amount"
          v-model="treatment.amount"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import TreatmentService from '@/services/TreatmentService'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data () {
    return {
      treatment: {
        date: null,
        type: null,
        amount: null
      },
      types: [
        { value: null, text: 'Valige tüüp' },
        { value: 'oblikhape', text: 'Oblikhape' },
        { value: 'ma ei tea', text: 'Pärast otsin' }
      ]
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onSubmit () {
      TreatmentService.put(this.treatment)
      this.$router.push({ path: '/treatments' })
    }
  },
  async mounted () {
    const treatmentId = this.$store.state.route.params.treatmentId
    this.treatment = (await TreatmentService.show(treatmentId)).data
  }
}
</script>

<style scoped>
</style>
