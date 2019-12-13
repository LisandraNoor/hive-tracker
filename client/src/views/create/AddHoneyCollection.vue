<template>
  <div class="honey-collecting-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="honeycollection.date"
          type="date"
          required
          placeholder="dd/mm/yyyy"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="honeyamount" label="Kogus">
        <b-form-input
          id="honeyamount"
          v-model="honeycollection.amount"
          type="number"
          required
          placeholder="kg"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import HoneyCollectionService from '@/services/HoneyCollectionService'

export default {
  data () {
    return {
      honeycollection: {
        date: null,
        amount: null
      }
    }
  },
  methods: {
    onSubmit () {
      try {
        HoneyCollectionService.post(this.honeycollection)
        this.$router.push('/honeycollections')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
