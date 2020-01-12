<template>
  <div class="inspections-component">
    <div>
      <table>
        <tr>
          <td class="heading">Raamide arv: </td>
          <td class="value">{{ stringFrameTotal + bottomFrameTotal + fullFrameTotal - removedFrameTotal}}</td>
        </tr>
        <tr>
          <td class="heading">Mesilaste meeleolu: </td>
          <td class="value">{{ latestInspectionAttitude }}</td>
        </tr>
        <tr>
          <td class="heading">Pere tugevus: </td>
          <td class="value">{{ latestInspectionStrength }}</td>
        </tr>
        <tr>
          <td class="heading">Ema olemasolu: </td>
          <td class="value">{{ latestInspectionQueen }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import HiveService from '@/services/HiveService'
import InspectionService from '@/services/InspectionService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hive: {},
      inspections: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    latestInspectionAttitude () {
      return this.inspections[this.inspections.length - 1].attitude
    },
    latestInspectionStrength () {
      return this.inspections[this.inspections.length - 1].strength
    },
    latestInspectionQueen () {
      return this.inspections[this.inspections.length - 1].queen
    },
    stringFrameTotal () {
      let stringFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        stringFrames.push(val.stringFrame)
      })
      return stringFrames.reduce(function (stringFrames, num) {
        return stringFrames + num
      }, 0)
    },
    bottomFrameTotal () {
      let bottomFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        bottomFrames.push(val.bottomFrame)
      })
      return bottomFrames.reduce(function (bottomFrames, num) {
        return bottomFrames + num
      }, 0)
    },
    fullFrameTotal () {
      let fullFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        fullFrames.push(val.fullFrame)
      })
      return fullFrames.reduce(function (fullFrames, num) {
        return fullFrames + num
      }, 0)
    },
    removedFrameTotal () {
      let removedFrames = []
      Object.entries(this.inspections).forEach(([key, val]) => {
        removedFrames.push(val.removedFramed)
      })
      return removedFrames.reduce(function (removedFrames, num) {
        return removedFrames + num
      }, 0)
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      const hiveId = this.$store.state.route.params.hiveId
      this.hive = (await HiveService.show(hiveId)).data
      this.inspections = (await InspectionService.index({
        hiveId: hiveId
      })).data
    }
  }
}
</script>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
  }
  a.date {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  .inspection {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    border-bottom: 1px solid darkgrey;
    padding: 5px;
  }
  td {
    padding: 5px;
  }
  .heading {
    font-size: 16px;
    text-align: left;
  }
  .value {
    font-size: 16px;
    text-align: left;
  }
</style>
