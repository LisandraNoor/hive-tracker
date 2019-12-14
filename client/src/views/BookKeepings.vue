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
        <td>{{ bookkeeping.date }}</td>
        <td>{{ bookkeeping.type }}</td>
        <td>{{ bookkeeping.name }}</td>
        <td>{{ bookkeeping.amount }}€</td>
        <td><router-link :to="`/bookkeepings/${bookkeeping.id}/edit`"><b-button>Muuda</b-button></router-link></td>
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
      bookkeepings: null
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
      this.bookkeepings = (await BookkeepingService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
