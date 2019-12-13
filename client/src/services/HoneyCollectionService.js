import Api from '@/services/Api'

export default {
  index () {
    return Api().get('honeycollections')
  },
  post (honeycollection) {
    return Api().post('honeycollections', honeycollection)
  },
  show (honeycollectionId) {
    return Api().get(`honeycollections/${honeycollectionId}`)
  },
  put (honeycollection) {
    return Api().put(`honeycollections/${honeycollection.id}`, honeycollection)
  }
}
