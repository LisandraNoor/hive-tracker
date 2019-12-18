<template>
  <div class="book-keeping-component">
    <div id="filterBookkkeeping">
      <select>
        <option>Kõik</option>
        <option>Sissetulekud</option>
        <option>Väljaminekud</option>
      </select>
    </div>
    <router-link :to="`/bookkeepings/addbookkeeping`"><b-button id="addBookkeeping" variant="dark">+</b-button></router-link>
    <table>
      <tr v-for="bookkeeping in bookkeepings" :key="bookkeeping.id">
        <!-- <td>{{ bookkeeping.date }}</td> -->
        <td>{{ bookkeeping.type }}</td>
        <!-- <td>{{ bookkeeping.name }}</td> -->
        <td>{{ bookkeeping.amount }}€</td>
        <td><router-link :to="`/bookkeepings/${bookkeeping.id}/edit`"><b-button>Muuda</b-button></router-link></td>
      </tr>
      <tr>
        <td>Kokku:</td>
          <td>{{ incomesTotal - outcomesTotal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BookkeepingService from '@/services/BookkeepingService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      bookkeepings: []
      // total: 0
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    incomesTotal () {
      let incomes = []
      Object.entries(this.bookkeepings).forEach(([key, val]) => {
        if (val.type === 'sissetulek') {
          incomes.push(val.amount)
        }
      })
      return incomes.reduce(function (incomes, num) {
        return incomes + num
      }, 0)
    },
    outcomesTotal () {
      let outcomes = []
      Object.entries(this.bookkeepings).forEach(([key, val]) => {
        if (val.type === 'valjaminek') {
          outcomes.push(val.amount)
        }
      })
      return outcomes.reduce(function (outcomes, num) {
        return outcomes + num
      }, 0)
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookkeepings = (await BookkeepingService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
