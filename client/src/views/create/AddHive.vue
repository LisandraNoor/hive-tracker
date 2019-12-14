<template>
  <div class="treatment-component">
    <b-form @submit="onSubmit">
      <b-form-group id="name" label="Nimi">
        <b-form-input
          id="name"
          v-model="hive.name"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="type" label="Taru tüüp">
        <b-form-select
          id="type"
          v-model="hive.type"
          :options="hive.types"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {
        name: null,
        type: null,
        types: [
          { value: null, text: 'Valige tüüp' },
          { value: 'downhive', text: 'Lamavtaru' },
          { value: 'uphive', text: 'Püsttaru' }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async onSubmit () {
      if (this.isUserLoggedIn) {
        try {
          await HiveService.post({
            hive: this.hive,
            userId: this.user.id
          }).data
          this.$router.push('/hives')
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
