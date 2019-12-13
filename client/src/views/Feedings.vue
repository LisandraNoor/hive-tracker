<template>
  <div class="feedings-component">
    <h1>Söötmised</h1>
    <div v-for="feeding in feedings" :key="feeding.id">
      <p>{{ feeding.date }}</p>
      <p>{{ feeding.type }}</p>
      <p>{{ feeding.amount }}</p>
      <router-link :to="`/feedings/${feeding.id}/edit`"><b-button>Muuda</b-button></router-link>
    </div>
  </div>
</template>

<script>
import FeedingService from '@/services/FeedingService'

export default {
  data () {
    return {
      feedings: null
    }
  },
  async mounted () {
    this.feedings = (await FeedingService.index()).data
  }
}
</script>

<style scoped>
</style>
