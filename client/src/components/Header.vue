<template>
    <div class="header-component">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <router-link :to="`/`">
          <b-navbar-brand href="/">HiveTracker</b-navbar-brand>
        </router-link>
        <b-navbar-nav class="ml-auto">
          <router-link :to="`/login`">
            <b-button
              variant="info"
              size="md"
              class="pb-2"
              type="submit"
              v-if="!$store.state.isUserLoggedIn"
              >Login
            </b-button>
          </router-link>
          <router-link :to="`/register`">
            <b-button
              variant="info"
              size="md"
              class="pb-2"
              type="submit"
              v-if="!$store.state.isUserLoggedIn"
              >Register
            </b-button>
          </router-link>
          <router-link :to="`/`">
            <b-button
              variant="info"
              size="md"
              class="pb-2"
              type="submit"
              @click="logout"
              v-if="$store.state.isUserLoggedIn"
              >Log out
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
</style>
