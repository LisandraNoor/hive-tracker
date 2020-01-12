<template>
  <div class="treatments-component">
    <h2>Ravimised</h2>
    <table>
      <thead>
        <tr>
          <th>Kuupäev</th>
          <th>Tüüp</th>
          <th>Kogus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="treatment in treatments" :key="treatment.id">
          <td>{{ treatment.date | formatDate }}</td>
          <td>{{ treatment.type }}</td>
          <td>{{ treatment.amount }} ml</td>
          <td><router-link :to="`/hives/${hive.id}/treatments/${treatment.id}/edit`"><b-button>Muuda</b-button></router-link></td>
        </tr>
      </tbody>
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
      treatments: [],
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
  table {
    width: 100%
  }
  td, th {
    padding: 10px;
    border-bottom: 1px solid darkgrey
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    background-color: black;
  }
</style>
