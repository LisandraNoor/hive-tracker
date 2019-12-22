<template>
  <div class="treatments-component">
    <h1>Ravimised</h1>
    <table v-for="treatment in treatments" :key="treatment.id">
      <tr>
        <td>Kuupäev:</td>
        <td>{{ treatment.date | formatDate }}</td>
      </tr>
      <tr>
        <td>Tüüp:</td>
        <td>{{ treatment.type }}</td>
      </tr>
      <tr>
        <td>Kogus:</td>
        <td>{{ treatment.amount }}</td>
      </tr>
      <tr>
        <td><router-link :to="`/hives/${hive.id}/treatments/${treatment.id}/edit`"><b-button>Muuda</b-button></router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import TreatmentService from '@/services/TreatmentService'
import HiveService from '@/services/HiveService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      treatments: [],
      treatment: null,
      hive: {}
    }
  },
  async mounted () {
    const hiveId = this.$store.state.route.params.hiveId
    this.hive = (await HiveService.show(hiveId)).data
    this.treatments = (await TreatmentService.index()).data
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }
}
</script>

<style scoped>
</style>
