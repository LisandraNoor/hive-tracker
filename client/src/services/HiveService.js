import Api from '@/services/Api'

export default {
  index () {
    return Api().get('hives')
  },
  post (hive) {
    return Api().post('hives', hive)
  }
}
