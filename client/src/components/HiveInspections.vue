<template>
  <div class="inspections-component">
    <h2>Ülevaatlused</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="inspections"
          :pagination.sync="pagination"
          select-all
          item-key="date"
          class="elevation-1"
          :inspections-per-page-items="[-1]"
          :hide-actions=true
          :search="filters"
          :custom-filter="customFilter"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
              >
                {{ header.text }}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <tr>
              <td>{{ props.item.date | formatDate }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
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
      pagination: {
        sortBy: 'date'
      },
      headers: [
        {
          text: 'Kuupäev',
          value: 'kuupaev'
        }
      ]
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
