import Api from '@/services/Api'

export default {
  index (honeycollection) {
    return Api().get('honeycollections', {
      params: honeycollection
    })
  },
  post (honeycollection) {
    return Api().post('honeycollections', honeycollection)
  },
  delete (honeycollectionId) {
    return Api().delete(`honeycollections/${honeycollectionId}`)
  },
  show (honeycollectionId) {
    return Api().get(`honeycollections/${honeycollectionId}`)
  },
  put (honeycollection) {
    return Api().put(`honeycollections/${honeycollection.id}`, honeycollection)
  }
}
