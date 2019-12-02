<template>
  <div class="inspections-component">
    <h1>Ülevaatlused</h1>
    <div v-for="inspection in inspections" :key="inspection.id">
      <router-link :to="`/inspection/${inspection.id}`"><p>{{ inspection.date }}</p></router-link>
    </div>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'

export default {
  data () {
    return {
      inspections: []
    }
  },
  async mounted () {
    this.inspections = (await InspectionService.index()).data
  }
}
</script>

<style scoped>
</style>
