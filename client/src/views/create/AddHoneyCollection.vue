<template>
  <div class="honey-collecting-component">
    <h2>Mee võtmise lisamine</h2>
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

      <b-button type="submit" variant="warning">Submit</b-button>
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
      try {
        HoneyCollectionService.post({
          honeycollection: this.honeycollection,
          userId: this.$store.state.user.id
        })
        this.$router.push('/honeycollections')
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
  input#honeyamount.form-control {
    width: 100%;
  }
</style>
