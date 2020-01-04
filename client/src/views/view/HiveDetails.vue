<template>
  <div class="hive-details-component">
    <div>
      <h2>{{ hive.name }}</h2>
    </div>
    <router-link :to="`/hives/${hive.id}/edit`"><b-button>Muuda</b-button></router-link>
    <router-link :to="`/hives/${hive.id}/addinspection`"><b-button>Lisa ülevaatlus</b-button></router-link>
    <router-link :to="`/hives/${hive.id}/addfeeding`"><b-button>Lisa söötmine</b-button></router-link>
    <router-link :to="`/hives/${hive.id}/addtreatment`"><b-button>Lisa ravimine</b-button></router-link>
    <br>
    <hive-feedings />
    <br>
    <hive-treatments />
    <br>
    <hive-inspections />
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import HiveFeedings from '@/components/HiveFeedings'
import HiveTreatments from '@/components/HiveTreatments'
import HiveInspections from '@/components/HiveInspections'

export default {
  components: {
    HiveFeedings,
    HiveTreatments,
    HiveInspections
  },
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
  button {
    margin: 10px;
    background-color: black;
  }
</style>
