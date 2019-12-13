<template>
  <div class="treatment-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="treatment.date"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="type" label="Ravim">
        <b-form-select
          id="type"
          v-model="treatment.type"
          :options="treatment.types"
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

export default {
  data () {
    return {
      treatment: {
        date: null,
        type: null,
        types: [
          { value: null, text: 'Valige tüüp' },
          { value: 'oblikhape', text: 'Oblikhape' },
          { value: 'ma ei tea', text: 'Pärast otsin' }
        ],
        amount: null
      }
    }
  },
  methods: {
    onSubmit () {
      try {
        TreatmentService.post(this.treatment)
        this.$router.push('/treatments')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
