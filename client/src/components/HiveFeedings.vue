<template>
  <div class="feedings-component">
    <h2>Söötmised</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="feedings"
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
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.amount }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import FeedingService from '@/services/FeedingService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      feedings: [],
      pagination: {
        sortBy: 'date'
      },
      headers: [
        {
          text: 'Kuupäev',
          value: 'kuupaev'
        },
        {
          text: 'Tüüp',
          value: 'tuup'
        },
        {
          text: 'Kogus',
          value: 'kogus'
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
      this.feedings = (await FeedingService.index({
        hiveId: hiveId
      })).data
    }
  }
}
</script>

<style scoped>
</style>
