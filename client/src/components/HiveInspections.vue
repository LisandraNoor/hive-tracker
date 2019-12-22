<template>
  <div class="inspections-component">
    <h1>Ülevaatlused</h1>
    <div v-for="inspection in inspections" :key="inspection.id">
      <router-link :to="`/hives/${hive.id}/inspections/${inspection.id}`"><p>{{ inspection.date | formatDate }}</p></router-link>
    </div>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import InspectionService from '@/services/InspectionService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      inspections: null
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
      this.inspections = (await InspectionService.index({
        hiveId: hiveId
      })).data
    }
  }
}
</script>

<style scoped>
</style>
