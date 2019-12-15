<template>
  <div class="register-component">
    <h1>Register</h1>
    <b-form>
      <b-form-group label="Email:">
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
          type="password"
          v-model="password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="error" v-html="error"/>
      <b-button variant="info" @click="register">Register</b-button>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'login'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
