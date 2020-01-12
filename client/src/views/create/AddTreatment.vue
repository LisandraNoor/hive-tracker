<template>
  <div class="treatment-component">
    <h2>Ravimise lisamine</h2>
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

      <b-button type="submit" variant="warning" @click="$router.push(-1)">Submit</b-button>
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
        types: [
          { value: null, text: 'Valige tüüp' },
          { value: 'Oblikhape 0.75% suhkruga', text: 'Oblikhape 0.75% suhkruga' },
          { value: 'Oblikhape 0.5% vesilahus', text: 'Oblikhape 0.5% vesilahus' },
          { value: 'Oblikhape aurutamine', text: 'Oblikhape aurutamine' },
          { value: 'Sipelghape', text: 'Sipelghape' },
          { value: 'Bienenwohl', text: 'Bienenwohl' },
          { value: 'Piimhape', text: 'Piimhape' }
        ],
        amount: null
      }
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onSubmit () {
      try {
        TreatmentService.post({
          treatment: this.treatment,
          userId: this.$store.state.user.id,
          hiveId: this.$store.state.route.params.hiveId
        })
        this.$router.go(-1)
      } catch (err) {
        console.log(err)
      }
    }
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
