<template>
  <div class="hives-component">
    <h1>Tarud</h1>
    <div v-for="hive in hives" :key="hive.id" class="hive">
      <router-link :to="`/hives/${hive.id}`"><b-button>{{ hive.name }}</b-button></router-link>
    </div>
    <div class="addNewHive">
      <router-link :to="`/addhive`"><b-button class="addHive">+</b-button></router-link>
    </div>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hives: null
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
      this.hives = (await HiveService.index()).data
    }
  }
}
</script>

<style scoped>
  button.btn-secondary {
    padding-top: 60px;
    padding-bottom: 60px;
    width: 150px;
    font-size: 24px;
    background-color: #FFCC33 ;
    border: 3px solid black;
    border-radius: 15px;
    color: black;
    margin: 15px;
  }
  div.hive, div.addNewHive {
    width: 180px;
    display: inline-block;
  }
  button.btn.addHive.btn-secondary {
    padding-top: 60px;
    padding-bottom: 60px;
    opacity: 0.8;
  }
</style>
