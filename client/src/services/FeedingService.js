import Api from '@/services/Api'

export default {
  index () {
    return Api().get('feedings')
  },
  post (feeding) {
    return Api().post('feedings', feeding)
  },
  show (feedingId) {
    return Api().get(`feedings/${feedingId}`)
  },
  put (feeding) {
    return Api().put(`feedings/${feeding.id}`, feeding)
  }
}
