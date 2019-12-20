<template>
  <div class="honeycollections-component">
    <h1>Mee võtmised</h1>
    <table v-for="honeycollection in honeycollections" :key="honeycollection.id">
      <tr>
        <td>Kuupäev:</td>
        <td>{{ honeycollection.date | formatDate }}</td>
      </tr>
      <tr>
        <td>Kogus:</td>
        <td>{{ honeycollection.amount }}</td>
      </tr>
      <tr>
        <td><router-link :to="`/honeycollections/${honeycollection.id}/edit`"><b-button>Muuda</b-button></router-link></td>
      </tr>
    </table>
    <router-link :to="`/honeycollections/addhoneycollection`"><b-button id="addHoneyCollection" variant="dark">+</b-button></router-link>
  </div>
</template>

<script>
import HoneyCollectionService from '@/services/HoneyCollectionService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      honeycollections: null
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
      this.honeycollections = (await HoneyCollectionService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
