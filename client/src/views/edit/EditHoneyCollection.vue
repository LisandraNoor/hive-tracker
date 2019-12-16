<template>
  <div class="honey-collecting-component">
    <b-form @submit="onSubmit">
      <b-form-group id="date" label="Kuupäev">
        <date-picker
          id="date"
          v-model="honeycollection.date"
          format="DD/MM/YYYY"
          required
        ></date-picker>
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
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data () {
    return {
      honeycollection: {
        date: null,
        amount: null
      }
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onSubmit () {
      HoneyCollectionService.put(this.honeycollection)
      this.$router.push({ path: '/honeycollections' })
    }
  },
  async mounted () {
    const honeycollectionId = this.$store.state.route.params.honeycollectionId
    this.honeycollection = (await HoneyCollectionService.show(honeycollectionId)).data
  }
}
</script>

<style scoped>
</style>
