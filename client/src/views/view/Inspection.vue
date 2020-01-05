<template>
  <div class="inspection-component">
    <table>
      <tr>
        <td class="heading">Kuupäev:</td>
        <td class="value">{{ inspection.date | formatDate }}</td>
      </tr>
      <tr>
        <td class="heading">Mesilaste meeleolu:</td>
        <td class="value">{{ inspection.attitude }}</td>
      </tr>
      <tr>
        <td class="heading">Pere tugevus:</td>
        <td class="value">{{ inspection.strength }}</td>
      </tr>
      <tr>
        <td class="heading">Sööda kogus:</td>
        <td class="value">{{ inspection.feedAmount }}</td>
      </tr>
      <tr>
        <td class="heading">Kärgede katvus mesilastega:</td>
        <td class="value">{{ inspection.frameCoverage }}</td>
      </tr>
      <tr>
        <td class="heading">Ema olemasolu:</td>
        <td class="value">{{ inspection.queen }}</td>
      </tr>
      <tr>
        <td class="heading">Ema värv:</td>
        <td class="value">{{ inspection.queenColor }}</td>
      </tr>
      <tr>
        <td class="heading">Traadiga kärjed:</td>
        <td class="value">{{ inspection.stringFrame }}</td>
      </tr>
      <tr>
        <td class="heading">Põhjaga kärjed:</td>
        <td class="value">{{ inspection.bottomFrame }}</td>
      </tr>
      <tr>
        <td class="heading">Ülesehitatud kärjed:</td>
        <td class="value">{{ inspection.fullFrame }}</td>
      </tr>
      <tr>
        <td class="heading">Eemaldatud kärjed:</td>
        <td class="value">{{ inspection.removedFramed }}</td>
      </tr>
      <tr>
        <td class="heading">Kraadid:</td>
        <td class="value">{{ inspection.degrees }}</td>
      </tr>
      <tr>
        <td class="heading">Ilm:</td>
        <td class="value">{{ inspection.weather }}</td>
      </tr>
      <tr>
        <td class="heading">Munade olemasolu:</td>
        <td class="value">{{ inspection.eggs }}</td>
      </tr>
      <tr>
        <td class="heading">Munade kogus:</td>
        <td class="value">{{ inspection.eggAmount }}</td>
      </tr>
      <tr>
        <td class="heading">Haiguse nähtusi:</td>
        <td class="value">{{ inspection.disease }}</td>
      </tr>
      <tr>
        <td class="heading">Haiguse tüüp:</td>
        <td class="value">{{ inspection.diseaseType }}</td>
      </tr>
      <tr>
        <td class="heading">Vaklade olemasolu:</td>
        <td class="value">{{ inspection.furros }}</td>
      </tr>
      <tr>
        <td class="heading">Vaklade kogus:</td>
        <td class="value">{{ inspection.furrosAmount }}</td>
      </tr>
      <tr>
        <td class="heading">Haue olemasolu:</td>
        <td class="value">{{ inspection.haue }}</td>
      </tr>
      <tr>
        <td class="heading">Haudme kogus:</td>
        <td class="value">{{ inspection.haueAmount }}</td>
      </tr>
    </table>
    <router-link :to="`/hives/${hive.id}/inspections/${inspection.id}/edit`"><b-button>Muuda</b-button></router-link>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'
import HiveService from '@/services/HiveService'

export default {
  data () {
    return {
      inspection: {},
      hive: {}
    }
  },
  async mounted () {
    const hiveId = this.$store.state.route.params.hiveId
    this.hive = (await HiveService.show(hiveId)).data
    const inspectionId = this.$store.state.route.params.inspectionId
    this.inspection = (await InspectionService.show(inspectionId)).data
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
    background-color: black;
  }
  table {
    margin-left: auto;
    margin-right: auto;
  }
  td {
    padding: 5px;
  }
  .heading {
    text-align: right;
  }
  .value {
    text-align: left;
  }
</style>
