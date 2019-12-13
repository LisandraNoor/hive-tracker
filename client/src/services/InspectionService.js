import Api from '@/services/Api'

export default {
  index () {
    return Api().get('inspections')
  },
  post (inspection) {
    return Api().post('inspections', inspection)
  },
  show (inspectionId) {
    return Api().get(`inspections/${inspectionId}`)
  },
  put (inspection) {
    return Api().put(`inspections/${inspection.id}`, inspection)
  }
}
