<template>
  <div class="treatment-component">
    <h2>Ülevaatluse muutmine</h2>
    <b-form @submit="onSubmit">
      <!--misc-->

      <b-form-group id="attitude" label="Mesilaste meeleolu">
        <b-form-select
          id="attitude"
          v-model="inspection.attitude"
          :options="attitudes"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="strength" label="Pere tugevus">
        <b-form-select
          id="strength"
          v-model="inspection.strength"
          :options="strengths"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="feedAmount" label="Sööda kogus">
        <b-form-select
          id="feedAmount"
          v-model="inspection.feedAmount"
          :options="feedAmounts"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="frameCoverage" label="Kärgede katvus mesilastega">
        <b-form-select
          id="frameCoverage"
          v-model="inspection.frameCoverage"
          :options="frameCoverages"
          required
        ></b-form-select>
      </b-form-group>
      <!--queen-->
      <b-form-group label="Ema olemasolu">
        <b-form-radio v-model="inspection.queen" value="Jah">Jah</b-form-radio>
        <b-form-radio v-model="inspection.queen" value="Ei">Ei</b-form-radio>
      </b-form-group>

      <b-form-group id="queenColor" label="Ema värv">
        <b-form-select
          id="queenColor"
          v-model="inspection.queenColor"
          :options="queenColors"
          required
        ></b-form-select>
      </b-form-group>
      <!--frames-->
      <b-form-group id="stringFrame" label="Traadiga kärjed">
        <b-form-input
          id="stringFrame"
          v-model="inspection.stringFrame"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="bottomFrame" label="Põhjaga kärjed">
        <b-form-input
          id="bottomFrame"
          v-model="inspection.bottomFrame"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="fullFrame" label="Ülesehitatud kärjed">
        <b-form-input
          id="fullFrame"
          v-model="inspection.fullFrame"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="removedFramed" label="Eemaldatud kärjed">
        <b-form-input
          id="removedFramed"
          v-model="inspection.removedFramed"
          type="number"
          required
        ></b-form-input>
      </b-form-group>
      <!--weather-->
      <b-form-group id="degrees" label="Kraadid">
        <b-form-input
          id="degrees"
          v-model="inspection.degrees"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="weather" label="Ilm">
        <b-form-select
          id="weather"
          v-model="inspection.weather"
          :options="weathers"
          required
        ></b-form-select>
      </b-form-group>
      <!--eggs-->
      <b-form-group label="Munade olemasolu">
        <b-form-radio v-model="inspection.eggs" value="Jah">Jah</b-form-radio>
        <b-form-radio v-model="inspection.eggs" value="Ei">Ei</b-form-radio>
      </b-form-group>

      <b-form-group id="eggAmount" label="Munade kogus">
        <b-form-select
          id="eggAmount"
          v-model="inspection.eggAmount"
          :options="eggAmounts"
          required
        ></b-form-select>
      </b-form-group>
      <!--disease-->
      <b-form-group label="Haiguse nähtusi">
        <b-form-radio v-model="inspection.disease" value="Jah">Jah</b-form-radio>
        <b-form-radio v-model="inspection.disease" value="Ei">Ei</b-form-radio>
      </b-form-group>

      <b-form-group id="diseaseType" label="Haiguse tüüp">
        <b-form-select
          id="diseaseType"
          v-model="inspection.diseaseType"
          :options="diseaseTypes"
          required
        ></b-form-select>
      </b-form-group>
      <!--furros-->
      <b-form-group label="Vaklade olemasolu">
        <b-form-radio v-model="inspection.furros" value="Jah">Jah</b-form-radio>
        <b-form-radio v-model="inspection.furros" value="Ei">Ei</b-form-radio>
      </b-form-group>

      <b-form-group id="furrosAmount" label="Vaklade kogus">
        <b-form-select
          id="furrosAmount"
          v-model="inspection.furrosAmount"
          :options="furrosAmounts"
          required
        ></b-form-select>
      </b-form-group>
      <!--haue-->
      <b-form-group label="Haue olemasolu">
        <b-form-radio v-model="inspection.haue" value="Jah">Jah</b-form-radio>
        <b-form-radio v-model="inspection.haue" value="Ei">Ei</b-form-radio>
      </b-form-group>

      <b-form-group id="haueAmount" label="Haudme kogus">
        <b-form-select
          id="haueAmount"
          v-model="inspection.haueAmount"
          :options="haueAmounts"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="warning">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'

export default {
  data () {
    return {
      attitudes: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Rahulikud', text: 'Rahulikud' },
        { value: 'Tigedad', text: 'Tigedad' }
      ],
      feedAmounts: [
        { value: null, text: 'Valige kogus' },
        { value: 'Madal', text: 'Madal' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Kõrge', text: 'Kõrge' }
      ],
      frameCoverages: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Madal', text: 'Madal' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Kõrge', text: 'Kõrge' }
      ],
      queenColors: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Sinine', text: 'Sinine' },
        { value: 'Valge', text: 'Valge' },
        { value: 'Kollane', text: 'Kollane' },
        { value: 'Punane', text: 'Punane' },
        { value: 'Roheline', text: 'Roheline' }
      ],
      weathers: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Selge', text: 'Selge' },
        { value: 'Pilvine', text: 'Pilvine' },
        { value: 'Vihmane', text: 'Vihmane' },
        { value: 'Lumine', text: 'Lumine' },
        { value: 'Vahelduva pilvisusega', text: 'Vahelduva pilvisusega' },
        { value: 'Lörts', text: 'Lörts' }
      ],
      eggAmounts: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Madal', text: 'Madal' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Kõrge', text: 'Kõrge' }
      ],
      diseaseTypes: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Ameerika haudmemädanik', text: 'Ameerika haudmemädanik' },
        { value: 'Euroopa haudmemädanik', text: 'Euroopa haudmemädanik' },
        { value: 'Varroatoos', text: 'Varroatoos' },
        { value: 'Nosematoos', text: 'Nosematoos' },
        { value: 'Väike tarumardikas', text: 'Väike tarumardikas' },
        { value: 'Lestad', text: 'Lestad' },
        { value: 'Hallitus', text: 'Hallitus' }
      ],
      furrosAmounts: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Madal', text: 'Madal' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Kõrge', text: 'Kõrge' }
      ],
      haueAmounts: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Madal', text: 'Madal' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Kõrge', text: 'Kõrge' }
      ],
      strengths: [
        { value: null, text: 'Valige tüüp' },
        { value: 'Nõrk', text: 'Nõrk' },
        { value: 'Keskmine', text: 'Keskmine' },
        { value: 'Tugev', text: 'Tugev' }
      ],
      inspection: {
        attitude: null,
        strength: null,
        feedAmount: null,
        frameCoverage: null,
        // queen
        queen: '', // Jah/ei radio button
        queenColor: null,
        // frames
        stringFrame: null, // traadiga
        bottomFrame: null, // p6hjaga
        fullFrame: null, // ylesehitatud
        removedFramed: null,
        // weather
        degrees: null,
        weather: null,
        // eggs
        eggs: '', // Jah/ei radio button
        eggAmount: null,
        // disease
        disease: '', // Jah/ei radio button
        diseaseType: null,
        // furros
        furros: '', // Jah/ei radio button
        furrosAmount: null,
        // haue
        haue: '', // Jah/ei radio button
        haueAmount: null
      }
    }
  },
  methods: {
    onSubmit () {
      InspectionService.put(this.inspection)
      this.$router.push({ path: '/inspections' })
    }
  },
  async mounted () {
    const inspectionId = this.$store.state.route.params.inspectionId
    this.inspection = (await InspectionService.show(inspectionId)).data
  }
}
</script>

<style scoped>
  form {
    width: 50%;
    text-align: center;
    margin-left: 26%;
  }
  div#date.mx-datepicker {
    width: 100%;
  }
  input#stringFrame.form-control, #bottomFrame.form-control, #fullFrame.form-control, #removedFramed.form-control, #degrees.form-control {
    width: 100%;
  }
</style>
