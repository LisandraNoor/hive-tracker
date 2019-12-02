<template>
  <div class="honey-collecting-component">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="form.date"
          type="date"
          required
          placeholder="dd/mm/yyyy"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="honeyamount" label="Kogus">
        <b-form-input
          id="honeyamount"
          v-model="form.honeyamount"
          type="number"
          required
          placeholder="kg"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
