<template>
  <div class="hive-details-component">
    <div>
      <p>{{ song.title }}</p><br>
      <p>{{ song.artist }}</p><br>
      <p>{{ song.genre }}</p><br>
    </div>
    <router-link :to="`/hivedetails/addinspection`"><b-button>Lisa ülevaatlus</b-button></router-link>
    <router-link :to="`/hivedetails/addfeeding`"><b-button>Lisa söötmine</b-button></router-link>
    <router-link :to="`/hivedetails/addtreatment`"><b-button>Lisa ravimine</b-button></router-link>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'

export default {
  data () {
    return {
      hive: null
    }
  },
  async mounted () {
    this.hive = (await HiveService.show(hiveId)).data
  }
}
</script>

<style scoped>
</style>
