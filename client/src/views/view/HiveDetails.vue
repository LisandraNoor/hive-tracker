<template>
  <div class="hive-details-component">
    <div>
      <label>Nimi:</label>
      <p>{{ hive.name }}</p>
    </div>
    <router-link :to="`/hives/${hive.id}/edit`"><b-button>Muuda</b-button></router-link>
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
      hive: {}
    }
  },
  async mounted () {
    const hiveId = this.$store.state.route.params.hiveId
    this.hive = (await HiveService.show(hiveId)).data
  }
}
</script>

<style scoped>
</style>
