<template>
  <div class="inspections-component">
    <h1>Ülevaatlused</h1>
    <div v-for="inspection in inspections" :key="inspection.id">
      <router-link :to="`/inspections/${inspection.id}`"><p>{{ inspections.date | formatDate }}</p></router-link>
    </div>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      inspections: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    ...mapGetters([
      'dateFormat'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.inspections = (await InspectionService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
