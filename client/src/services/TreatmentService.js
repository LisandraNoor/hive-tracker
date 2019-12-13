import Api from '@/services/Api'

export default {
  index () {
    return Api().get('treatments')
  },
  post (treatment) {
    return Api().post('treatments', treatment)
  },
  show (treatmentId) {
    return Api().get(`treatments/${treatmentId}`)
  },
  put (treatment) {
    return Api().put(`treatments/${treatment.id}`, treatment)
  }
}
