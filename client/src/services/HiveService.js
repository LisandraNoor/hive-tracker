import Api from '@/services/Api'

export default {
  index () {
    return Api().get('hives')
  },
  post (hive) {
    return Api().post('hives', hive)
  },
  show (hiveId) {
    return Api().get(`hives/${hiveId}`)
  },
  put (hive) {
    return Api().put(`hives/${hive.id}`, hive)
  }
}
