<template>
  <div class="inspections-component">
    <h2>Ülevaatlused</h2>
    <table v-for="inspection in inspections" :key="inspection.id">
      <tr>
        <td><router-link :to="`/hives/${hive.id}/inspections/${inspection.id}`" class="date">{{ inspection.date | formatDate }}</router-link></td>
      </tr>
    </table>
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
      inspections: []
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
  },
  methods: {
    navigateToEdit () {
      this.$router.push({ name: '/hives/:hiveId/inspections/:inspectionId/edit', params: { hiveId: this.hive.id, inspectionId: this.inspections.id } })
    }
  }
}
</script>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
  }
  a.date {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  td {
    padding: 5px;
  }
</style>
