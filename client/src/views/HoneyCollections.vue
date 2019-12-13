<template>
  <div class="honeycollections-component">
    <h1>Ravimised</h1>
    <table v-for="honeycollection in honeycollections" :key="honeycollection.id">
      <tr>
        <td>Kuupäev:</td>
        <td>{{ honeycollection.date }}</td>
      </tr>
      <tr>
        <td>Kogus:</td>
        <td>{{ honeycollection.amount }}</td>
      </tr>
      <tr>
        <td><router-link :to="`/honeycollections/${honeycollection.id}/edit`"><b-button>Muuda</b-button></router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import HoneyCollectionService from '@/services/HoneyCollectionService'

export default {
  data () {
    return {
      honeycollections: []
    }
  },
  async mounted () {
    this.honeycollections = (await HoneyCollectionService.index()).data
  }
}
</script>

<style scoped>
</style>
