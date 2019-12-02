<template>
  <div class="inspection-component">
    <table>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{  }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'

export default {
  data () {
    return {
      inspections: []
    }
  },
  async mounted () {
    this.inspections = (await InspectionService.index()).data
  }
}
</script>

<style scoped>
</style>
