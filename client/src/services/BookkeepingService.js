import Api from '@/services/Api'

export default {
  index (bookkeeping) {
    return Api().get('bookkeepings', {
      params: bookkeeping
    })
  },
  post (bookkeeping) {
    return Api().post('bookkeepings', bookkeeping)
  },
  delete (bookkeepingId) {
    return Api().delete(`bookkeepings/${bookkeepingId}`)
  },
  show (bookkeepingId) {
    return Api().get(`bookkeepings/${bookkeepingId}`)
  },
  put (bookkeeping) {
    return Api().put(`bookkeepings/${bookkeeping.id}`, bookkeeping)
  }
}
