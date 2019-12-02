import Api from '@/services/Api'

export default {
  index () {
    return Api().get('bookkeepings')
  },
  post (bookkeeping) {
    return Api().post('bookkeepings', bookkeeping)
  }
}
