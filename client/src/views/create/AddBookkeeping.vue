<template>
  <div class="add-feeding-component">
    <h2>Raamatupidamise lisamine</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <date-picker
          id="date"
          v-model="bookkeeping.date"
          format="DD/MM/YYYY"
          required
        ></date-picker>
      </b-form-group>

      <b-form-group id="name" label="Nimetus">
        <b-form-input
          id="name"
          v-model="bookkeeping.name"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="type" label="Sissetulek/Väljaminek">
        <b-form-select
          id="type"
          v-model="bookkeeping.type"
          :options="bookkeeping.types"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="amount" label="Kogus">
        <b-form-input
          id="amount"
          v-model="bookkeeping.amount"
          type="number"
          required
          placeholder="€"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="warning">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import BookkeepingService from '@/services/BookkeepingService'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data () {
    return {
      bookkeeping: {
        date: null,
        name: null,
        type: null,
        types: [
          { value: null, text: 'Vali' },
          { value: 'sissetulek', text: 'Sissetulek' },
          { value: 'valjaminek', text: 'Väljaminek' }
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
        BookkeepingService.post({
          bookkeeping: this.bookkeeping,
          userId: this.$store.state.user.id
        })
        this.$router.push('/bookkeepings')
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
