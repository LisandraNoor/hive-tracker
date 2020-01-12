<template>
  <div class="treatment-component">
    <h2>Taru lisamine</h2>
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

      <b-button type="submit" variant="warning">Submit</b-button>
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
        { value: 'Eesti lamavtaru', text: 'Eesti lamavtaru' },
        { value: 'Langstroth korpustaru', text: 'Langstroth korpustaru' }
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
  form {
    width: 50%;
    text-align: center;
    margin-left: 26%;
  }
</style>
