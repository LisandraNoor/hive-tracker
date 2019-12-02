<template>
  <div class="book-keeping-component">
    <div id="filterBookkkeeping">
      <select>
        <option>Kõik</option>
        <option>Sissetulekud</option>
        <option>Väljaminekud</option>
      </select>
    </div>
    <router-link :to="`/bookkeeping/addbookkeeping`"><b-button id="addBookkeeping" variant="dark">+</b-button></router-link>
    <table>
      <tr v-for="bookkeeping in bookkeepings" :key="bookkeeping.id">
        <td>{{ bookkeeping.type }}</td>
        <td>{{ bookkeeping.name }}</td>
        <td>{{ bookkeeping.amount }}€</td>
      </tr>
    </table>
    <div>{{ bookkeepings.total }}</div>
  </div>
</template>

<script>
import BookkeepingService from '@/services/BookkeepingService'

export default {
  data () {
    return {
      bookkeepings: [
        {
          type: '',
          name: '',
          amount: 0,
          total: 0
        }
      ]
    }
  },
  async mounted () {
    this.bookkeepings = (await BookkeepingService.index()).data
    /*this.bookkeepings.type = type
    this.bookkeepings.amount = amount*/
    if (this.type === 'Sissetulek') {
      this.amount += this.total 
      console.log(this.type + this.total)
    } else if (this.type === 'Väljaminek') {
      //this.amount -= this.total
      console.log(this.type + this.total)
    }
  }
}
</script>

<style scoped>
</style>
