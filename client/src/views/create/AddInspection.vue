<template>
  <div class="treatment-component">
    <b-form @submit="onSubmit">
      <!--misc-->
      <b-form-group id="date" label="Kuupäev">
        <b-form-input
          id="date"
          v-model="inspection.date"
          type="date"
          required
          placeholder="dd/mm/yyyy"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="attitude" label="Mesilaste meeleolu">
        <b-form-select
          id="attitude"
          v-model="inspection.attitude"
          :options="inspection.attitudes"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="strength" label="Pere tugevus">
        <b-form-select
          id="strength"
          v-model="inspection.strength"
          :options="inspection.strengths"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="feedAmount" label="Sööda kogus">
        <b-form-select
          id="feedAmount"
          v-model="inspection.feedAmount"
          :options="inspection.feedAmounts"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="frameCoverage" label="Kärgede katvus mesilastega">
        <b-form-select
          id="frameCoverage"
          v-model="inspection.frameCoverage"
          :options="inspection.frameCoverages"
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
          :options="inspection.queenColors"
          required
        ></b-form-select>
      </b-form-group>
      <!--frames-->
      <b-form-group id="stringFrame" label="Traadiga kärjed">
        <b-form-input
          id="stringFrame"
          v-model="inspection.stringFrame"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="bottomFrame" label="Põhjaga kärjed">
        <b-form-input
          id="bottomFrame"
          v-model="inspection.bottomFrame"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="fullFrame" label="Ülesehitatud kärjed">
        <b-form-input
          id="fullFrame"
          v-model="inspection.fullFrame"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="removedFramed" label="Eemaldatud kärjed">
        <b-form-input
          id="removedFramed"
          v-model="inspection.removedFramed"
          type="number"
        ></b-form-input>
      </b-form-group>
      <!--weather-->
      <b-form-group id="degrees" label="Kraadid">
        <b-form-input
          id="degrees"
          v-model="inspection.degrees"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="weather" label="Ilm">
        <b-form-select
          id="weather"
          v-model="inspection.weather"
          :options="inspection.weathers"
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
          :options="inspection.eggAmounts"
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
          :options="inspection.diseaseTypes"
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
          :options="inspection.furrosAmounts"
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
          :options="inspection.haueAmounts"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import InspectionService from '@/services/InspectionService'

export default {
  data () {
    return {
      inspection: {
        date: null,
        attitude: null,
        attitudes: [
          { value: null, text: 'Valige tüüp' },
          { value: 'rahulikud', text: 'rahulikud' },
          { value: 'tigedad', text: 'tigedad' }
        ],
        strength: null,
        strengths: [
          { value: null, text: 'Valige tüüp' },
          { value: 'nõrk', text: 'nõrk' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'tugev', text: 'tugev' }
        ],
        feedAmount: null,
        feedAmounts: [
          { value: null, text: 'Valige kogus' },
          { value: 'madal', text: 'madal' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'kõrge', text: 'kõrge' }
        ],
        frameCoverage: null,
        frameCoverages: [
          { value: null, text: 'Valige tüüp' },
          { value: 'madal', text: 'madal' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'kõrge', text: 'kõrge' }
        ],
        // queen
        queen: '', // Jah/ei radio button
        queenColor: null,
        queenColors: [
          { value: null, text: 'Valige tüüp' },
          { value: 'Sinine', text: 'Sinine' },
          { value: 'Valge', text: 'Valge' },
          { value: 'Kollane', text: 'Kollane' },
          { value: 'Punane', text: 'Punane' },
          { value: 'Roheline', text: 'Roheline' }
        ],
        // frames
        stringFrame: null, // traadiga
        bottomFrame: null, // p6hjaga
        fullFrame: null, // ylesehitatud
        removedFramed: null,
        // weather
        degrees: null,
        weather: null,
        weathers: [
          { value: null, text: 'Valige tüüp' },
          { value: 'Selge', text: 'Selge' },
          { value: 'Pilvine', text: 'Pilvine' },
          { value: 'Vihmane', text: 'Vihmane' },
          { value: 'Lumine', text: 'Lumine' },
          { value: 'Vahelduva pilvisusega', text: 'Vahelduva pilvisusega' },
          { value: 'Lörts', text: 'Lörts' }
        ],
        // eggs
        eggs: '', // Jah/ei radio button
        eggAmount: null,
        eggAmounts: [
          { value: null, text: 'Valige tüüp' },
          { value: 'madal', text: 'madal' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'kõrge', text: 'kõrge' }
        ],
        // disease
        disease: '', // Jah/ei radio button
        diseaseType: null,
        diseaseTypes: [
          { value: null, text: 'Valige tüüp' },
          { value: 'Ameerika cancer', text: 'Ameerika cancer' },
          { value: 'Lestad', text: 'Lestad' },
          { value: 'Hallitus', text: 'Hallitus' }
        ],
        // furros
        furros: '', // Jah/ei radio button
        furrosAmount: null,
        furrosAmounts: [
          { value: null, text: 'Valige tüüp' },
          { value: 'madal', text: 'madal' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'kõrge', text: 'kõrge' }
        ],
        // haue
        haue: '', // Jah/ei radio button
        haueAmount: null,
        haueAmounts: [
          { value: null, text: 'Valige tüüp' },
          { value: 'madal', text: 'madal' },
          { value: 'keskmine', text: 'keskmine' },
          { value: 'kõrge', text: 'kõrge' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      try {
        InspectionService.post(this.inspection)
        this.$router.push('/inspections')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
