<template>
  <div class="inspections-component">
    <h2>Ülevaatlused</h2>
      <div class="inspection" v-for="inspection in computedObj" :key="inspection.id">
        <router-link :to="`/hives/${hive.id}/inspections/${inspection.id}`" class="date">{{ inspection.date | formatDate }}</router-link>
      </div>
    <b-button class="button" @click="showAll" :disabled="showMore">Näita kõik</b-button>
    <b-button class="button" @click="showLess" :disabled="!showMore">Näita vähem</b-button>
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
      inspections: [],
      limit: 5,
      showMore: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    computedObj () {
      return this.limit ? this.inspections.slice(0, this.limit) : this.inspections
    }
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
    },
    showAll () {
      this.showMore = true
      this.limit = null
    },
    showLess () {
      this.showMore = false
      this.limit = 5
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
  .inspection {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    border-bottom: 1px solid darkgrey;
    padding: 5px;
  }
  td {
    padding: 5px;
  }
  .btn.button.btn-secondary {
    background-color: black;
    margin: 15px
  }
  button:disabled {
    display: none
  }
  .heading {
    font-size: 16px;
    text-align: left;
  }
  .value {
    font-size: 16px;
    text-align: left;
  }
  button {
    margin: 10px;
    background-color: black;
  }
</style>
