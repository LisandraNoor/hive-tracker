<template>
  <div class="add-feeding-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="bookkeeping.date"
          type="date"
          required
        ></b-form-input>
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

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import BookkeepingService from '@/services/BookkeepingService'

export default {
  data () {
    return {
      bookkeeping: {
        date: null,
        name: null,
        type: null,
        types: [
          { value: null, text: 'Vali' },
          { value: 'Sissetulek', text: 'Sissetulek' },
          { value: 'Väljaminek', text: 'Väljaminek' }
        ],
        amount: null
      }
    }
  },
  methods: {
    onSubmit () {
      try {
        BookkeepingService.post(this.bookkeeping)
        this.$router.push('/bookkeepings')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
