<template>
  <div class="honey-collecting-component">
    <h2>Mee võtmise muutmine</h2>
    <b-form @submit="onSubmit">

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

export default {
  data () {
    return {
      honeycollection: {
        amount: null
      }
    }
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
