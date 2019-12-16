<template>
  <div class="treatments-component">
    <h1>Ravimised</h1>
    <table v-for="treatment in treatments" :key="treatment.id">
      <tr>
        <td>Kuupäev:</td>
        <td>{{ treatment.date }}</td>
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
        <td><b-button @click="deleteTreatment(treatment.id)">Kustuta</b-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import TreatmentService from '@/services/TreatmentService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      treatments: null,
      treatment: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      const hiveId = this.$store.state.route.params.hiveId
      this.hive = (await HiveService.show(hiveId)).data
      this.treatments = (await TreatmentService.index({
        hiveId: hiveId
      })).data
    }
  },
  methods: {
    async deleteTreatment (id) {
      try {
        console.log(id)
        await TreatmentService.delete(id)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
