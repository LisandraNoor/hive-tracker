<template>
  <div class="inspection-component">
    <table>
      <tr>
        <td>Kuupäev</td>
        <td>{{ inspection.date }}</td>
      </tr>
      <tr>
        <td>Mesilaste meeleolu</td>
        <td>{{ inspection.attitude }}</td>
      </tr>
      <tr>
        <td>Pere tugevus</td>
        <td>{{ inspection.strength }}</td>
      </tr>
      <tr>
        <td>Sööda kogus</td>
        <td>{{ inspection.feedAmount }}</td>
      </tr>
      <tr>
        <td>Kärgede katvus mesilastega</td>
        <td>{{ inspection.frameCoverage }}</td>
      </tr>
      <tr>
        <td>Ema olemasolu</td>
        <td>{{ inspection.queen }}</td>
      </tr>
      <tr>
        <td>Ema värv</td>
        <td>{{ inspection.queenColor }}</td>
      </tr>
      <tr>
        <td>Traadiga kärjed</td>
        <td>{{ inspection.stringFrame }}</td>
      </tr>
      <tr>
        <td>Põhjaga kärjed</td>
        <td>{{ inspection.bottomFrame }}</td>
      </tr>
      <tr>
        <td>Ülesehitatud kärjed</td>
        <td>{{ inspection.fullFrame }}</td>
      </tr>
      <tr>
        <td>Eemaldatud kärjed</td>
        <td>{{ inspection.removedFramed }}</td>
      </tr>
      <tr>
        <td>Kraadid</td>
        <td>{{ inspection.degrees }}</td>
      </tr>
      <tr>
        <td>Ilm</td>
        <td>{{ inspection.weather }}</td>
      </tr>
      <tr>
        <td>Munade olemasolu</td>
        <td>{{ inspection.eggs }}</td>
      </tr>
      <tr>
        <td>Munade kogus</td>
        <td>{{ inspection.eggAmount }}</td>
      </tr>
      <tr>
        <td>Haiguse nähtusi</td>
        <td>{{ inspection.disease }}</td>
      </tr>
      <tr>
        <td>Haiguse tüüp</td>
        <td>{{ inspection.diseaseType }}</td>
      </tr>
      <tr>
        <td>Vaklade olemasolu</td>
        <td>{{ inspection.furros }}</td>
      </tr>
      <tr>
        <td>Vaklade kogus</td>
        <td>{{ inspection.furrosAmount }}</td>
      </tr>
      <tr>
        <td>Haue olemasolu</td>
        <td>{{ inspection.haue }}</td>
      </tr>
      <tr>
        <td>Haudme kogus</td>
        <td>{{ inspection.haueAmount }}</td>
      </tr>
    </table>
    <router-link :to="`/inspections/${inspection.id}/edit`"><b-button>Muuda</b-button></router-link>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'

export default {
  data () {
    return {
      inspection: {}
    }
  },
  async mounted () {
    const inspectionId = this.$store.state.route.params.inspectionId
    this.inspection = (await InspectionService.show(inspectionId)).data
  }
}
</script>

<style scoped>
</style>
