<template>
  <div class="feedings-component">
    <h2>Söötmised</h2>
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
        <tr v-for="feeding in feedings" :key="feeding.id">
          <td>{{ feeding.date | formatDate }}</td>
          <td>{{ feeding.type }}</td>
          <td>{{ feeding.amount }}</td>
          <td><router-link :to="`/hives/${hive.id}/feedings/${feeding.id}/edit`"><b-button>Muuda</b-button></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import FeedingService from '@/services/FeedingService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      feedings: []
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
      this.feedings = (await FeedingService.index({
        hiveId: hiveId
      })).data
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
