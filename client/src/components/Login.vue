<template>
  <div class="login-view-component">
    <h1>Login</h1>
    <b-form>
      <b-form-group id="input-group-2" label="Email:">
        <b-form-input
          name="email"
          id="email"
          v-model="email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:">
        <b-form-input
          name="password"
          id="password"
          v-model="password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="error" v-html="error"/>
      <b-button variant="info" @click="login">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>
