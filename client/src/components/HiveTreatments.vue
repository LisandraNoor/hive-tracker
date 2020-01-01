<template>
  <div class="treatments-component">
    <h2>Raamatupidamised</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="treatments"
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
import TreatmentService from '@/services/TreatmentService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      treatments: [],
      treatment: {},
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
      this.treatments = (await TreatmentService.index({
        hiveId: hiveId
      })).data
    }
  },
  methods: {
    async deleteTreatment (id) {
      try {
        console.log(id)
        await TreatmentService.delete(id)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
