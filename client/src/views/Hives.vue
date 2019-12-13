<template>
  <div class="hives-component">
    <h1>Tarud</h1>
    <div v-for="hive in hives" :key="hive.id">
      <router-link :to="`/hives/${hive.id}`"><b-button>{{ hive.name }}</b-button></router-link>
    </div>
    <router-link :to="`/addhive`"><b-button>+ Lisa taru</b-button></router-link>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'

export default {
  data () {
    return {
      hives: null
    }
  },
  async mounted () {
    this.hives = (await HiveService.index()).data
  }
}
</script>

<style scoped>
</style>
