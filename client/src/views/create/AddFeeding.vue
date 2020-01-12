<template>
  <div class="add-feeding-component">
    <h2>Söötmise lisamine</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <date-picker
          id="date"
          v-model="feeding.date"
          format="DD/MM/YYYY"
          required
        ></date-picker>
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

      <b-button type="submit" variant="warning">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import FeedingService from '@/services/FeedingService'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data () {
    return {
      feeding: {
        date: null,
        type: null,
        types: [
          { value: null, text: 'Valige tüüp' },
          { value: 'Suhkrusiirup', text: 'Suhkrusiirup' },
          { value: 'Söödasiirup', text: 'Söödasiirup' },
          { value: 'Pärmiga sööt', text: 'Pärmiga sööt' }
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
        FeedingService.post({
          feeding: this.feeding,
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
