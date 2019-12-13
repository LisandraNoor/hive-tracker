import Api from '@/services/Api'

export default {
  index () {
    return Api().get('bookkeepings')
  },
  post (bookkeeping) {
    return Api().post('bookkeepings', bookkeeping)
  },
  show (bookkeepingId) {
    return Api().get(`bookkeepings/${bookkeepingId}`)
  },
  put (bookkeeping) {
    return Api().put(`bookkeepings/${bookkeeping.id}`, bookkeeping)
  }
}
