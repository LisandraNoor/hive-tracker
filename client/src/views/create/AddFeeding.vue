<template>
  <div class="add-feeding-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="feeding.date"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="type" label="Sööda tüüp">
        <b-form-select
          id="type"
          v-model="feeding.type"
          :options="feeding.types"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="amount" label="Kogus">
        <b-form-input
          id="amount"
          v-model="feeding.amount"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import FeedingService from '@/services/FeedingService'

export default {
  data () {
    return {
      feeding: {
        date: null,
        type: null,
        types: [
          { value: null, text: 'Valige tüüp' },
          { value: 'suhkrusiirup', text: 'Suhkrusiirup' },
          { value: 'parm', text: 'Pärmi asi' }
        ],
        amount: null
      }
    }
  },
  methods: {
    onSubmit () {
      try {
        FeedingService.post({
          feeding: this.feeding,
          userId: this.$store.state.user.id,
          hiveId: this.$store.state.route.params.hiveId
        })
        this.$router.push({
          path: '/hives'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
