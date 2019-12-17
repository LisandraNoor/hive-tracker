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
    </table>
    {{ total }}
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
    total () {
      let total = []
      Object.entries(this.bookkeepings).forEach(([key, val]) => {
        total.push(val.amount)
      })
      return total.reduce(function (total, num) {
        return total + num
      }, 0)
      if (this.bookkeepings.type === 'income') { 
      }
      if (this.type === 'outcome') {
        console.log('outcome')
      }
      /* if (this.type === 'income') {
        console.log('income: ', this.total)
        return this.total + this.amount
      } else if (this.type === 'outcome') {
        console.log('outcome: ', this.total)
        return this.total - this.amount
      }
      console.log('incalc: ', this.total)
      return this.total */
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookkeepings = (await BookkeepingService.index()).data
      /* if (this.type == 'income') {
        console.log('income: ', this.total)
        return this.total + this.amount
      } else if (this.type == 'outcome') {
        console.log('outcome: ', this.total)
        return this.total - this.amount
      }
      console.log('incalc: ', this.total)
      return this.total */
    }
  }
}
</script>

<style scoped>
</style>
