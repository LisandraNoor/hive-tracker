<template>
  <div class="hive-details-component">
    <div>
    <router-link :to="`/hives/${hive.id}/edit`"><h2>{{ hive.name }}</h2></router-link>
    </div>
    <hive-detail />
    <br>
    <router-link :to="`/hives/${hive.id}/addinspection`"><b-button>+ Ülevaatlus</b-button></router-link>
    <router-link :to="`/hives/${hive.id}/addtreatment`"><b-button>+ Ravimine</b-button></router-link>
    <router-link :to="`/hives/${hive.id}/addfeeding`"><b-button>+ Söötmine</b-button></router-link>
    <br>
    <br>
    <hive-inspections />
    <br>
    <hive-treatments />
    <br>
    <hive-feedings />
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import HiveFeedings from '@/components/HiveFeedings'
import HiveTreatments from '@/components/HiveTreatments'
import HiveInspections from '@/components/HiveInspections'
import HiveDetail from '@/components/HiveDetail'

export default {
  components: {
    HiveFeedings,
    HiveTreatments,
    HiveInspections,
    HiveDetail
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
  a {
    color: black;
  }
  button {
    margin: 10px;
    background-color: black;
  }
</style>
