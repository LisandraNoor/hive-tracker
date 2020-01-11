<template>
  <div class="add-feeding-component">
    <h2>Söötmise muutmine</h2>
    <b-form @submit="onSubmit">

      <b-form-group id="type" label="Sööda tüüp">
        <b-form-select
          id="type"
          v-model="feeding.type"
          :options="types"
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

      <b-button type="submit" variant="warning">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import FeedingService from '@/services/FeedingService'

export default {
  data () {
    return {
      feeding: {
        type: null,
        amount: null
      },
      types: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Suhkrusiirup', text: 'Suhkrusiirup' },
        { value: 'Pärm', text: 'Pärmi asi' }
      ]
    }
  },
  methods: {
    onSubmit () {
      FeedingService.put(this.feeding)
      this.$router.push({ path: '/feedings' })
    }
  },
  async mounted () {
    const feedingId = this.$store.state.route.params.feedingId
    this.feeding = (await FeedingService.show(feedingId)).data
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
