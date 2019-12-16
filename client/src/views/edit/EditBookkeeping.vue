<template>
  <div class="add-feeding-component">
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
          :options="types"
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

      <b-button type="submit" variant="primary">Submit</b-button>
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
        amount: null
      },
      types: [
        { value: null, text: 'Vali' },
        { value: 'Sissetulek', text: 'Sissetulek' },
        { value: 'Väljaminek', text: 'Väljaminek' }
      ]
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onSubmit () {
      BookkeepingService.put(this.bookkeeping)
      this.$router.push({ path: '/bookkeepings' })
    }
  },
  async mounted () {
    const bookkeepingId = this.$store.state.route.params.bookkeepingId
    this.bookkeeping = (await BookkeepingService.show(bookkeepingId)).data
  }
}
</script>

<style scoped>
</style>
