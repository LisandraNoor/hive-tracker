import Api from '@/services/Api'

export default {
  index (inspection) {
    return Api().get('inspections', {
      params: inspection
    })
  },
  post (inspection) {
    return Api().post('inspections', inspection)
  },
  delete (treatmentId) {
    return Api().delete(`treatments/${treatmentId}`)
  },
  show (inspectionId) {
    return Api().get(`inspections/${inspectionId}`)
  },
  put (inspection) {
    return Api().put(`inspections/${inspection.id}`, inspection)
  }
}
