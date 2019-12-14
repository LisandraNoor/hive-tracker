import Api from '@/services/Api'

export default {
  index (feeding) {
    return Api().get('feedings', {
      params: feeding
    })
  },
  post (feeding) {
    return Api().post('feedings', feeding)
  },
  delete (feedingId) {
    return Api().delete(`feedings/${feedingId}`)
  },
  show (feedingId) {
    return Api().get(`feedings/${feedingId}`)
  },
  put (feeding) {
    return Api().put(`feedings/${feeding.id}`, feeding)
  }
}
