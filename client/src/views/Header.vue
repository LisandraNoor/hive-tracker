<template>
  <div class="header-component">
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <router-link :to="`/`" v-if="!$store.state.isUserLoggedIn">
        <b-navbar-brand>HiveTracker</b-navbar-brand>
      </router-link>
      <router-link :to="`/hives`" v-if="$store.state.isUserLoggedIn">
        <b-navbar-brand>HiveTracker</b-navbar-brand>
      </router-link>
      <router-link :to="`/hives`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Tarud
        </b-button>
      </router-link>
      <router-link :to="`/honeycollections`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Mee võtmised
        </b-button>
      </router-link>
      <router-link :to="`/bookkeepings`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Raamatupidamine
        </b-button>
      </router-link>
      <router-link :to="`/feedings`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Söötmised
        </b-button>
      </router-link>
      <router-link :to="`/treatments`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Ravimised
        </b-button>
      </router-link>
      <router-link :to="`/search`">
        <b-button
          variant="warning"
          size="md"
          class="pb-2"
          type="submit"
          v-if="$store.state.isUserLoggedIn"
          >Andmete ülevaade
        </b-button>
      </router-link>
      <b-navbar-nav class="ml-auto">
        <router-link :to="`/`">
          <b-button
            variant="warning"
            size="md"
            class="pb-2"
            type="submit"
            v-if="!$store.state.isUserLoggedIn"
            >Logi sisse
          </b-button>
        </router-link>
        <router-link :to="`/register`">
          <b-button
            variant="warning"
            size="md"
            class="pb-2"
            type="submit"
            v-if="!$store.state.isUserLoggedIn"
            >Registreeri
          </b-button>
        </router-link>
        <router-link :to="`/`">
          <b-button
            variant="warning"
            size="md"
            class="pb-2"
            type="submit"
            @click="logout"
            v-if="$store.state.isUserLoggedIn"
            >Logi välja
          </b-button>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>
  div.navbar-brand {
    color: black;
  }
</style>
