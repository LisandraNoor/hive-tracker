<template>
  <div class="feedings-component">
    <h1>Söötmised</h1>
    <div v-for="feeding in feedings" :key="feeding.id">
      <p>{{ feeding.date | formatDate }}</p>
      <p>{{ feeding.type }}</p>
      <p>{{ feeding.amount }}</p>
      <router-link :to="`/feedings/${feeding.id}/edit`"><b-button>Muuda</b-button></router-link>
    </div>
  </div>
</template>

<script>
import FeedingService from '@/services/FeedingService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      feedings: null
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
      this.feedings = (await FeedingService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
