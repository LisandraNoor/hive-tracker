import Api from '@/services/Api'

export default {
  index () {
    return Api().get('inspections')
  },
  post (inspection) {
    return Api().post('inspections', inspection)
  }
}
