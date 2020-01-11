<template>
  <div class="treatment-component">
    <h2>Ravimise muutmine</h2>
    <b-form @submit="onSubmit">

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

      <b-button type="submit" variant="warning">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import TreatmentService from '@/services/TreatmentService'

export default {
  data () {
    return {
      treatment: {
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
  form {
    width: 50%;
    text-align: center;
    margin-left: 26%;
  }
  div#date.mx-datepicker {
    width: 100%;
  }
  input#amount.form-control {
    width: 100%;
  }
</style>
