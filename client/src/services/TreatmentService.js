import Api from '@/services/Api'

export default {
  index (treatment) {
    return Api().get('treatments', {
      params: treatment
    })
  },
  post (treatment) {
    return Api().post('treatments', treatment)
  },
  delete (treatmentId) {
    return Api().delete(`treatments/${treatmentId}`)
  },
  show (treatmentId) {
    return Api().get(`treatments/${treatmentId}`)
  },
  put (treatment) {
    return Api().put(`treatments/${treatment.id}`, treatment)
  }
}
