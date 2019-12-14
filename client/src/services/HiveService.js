import Api from '@/services/Api'

export default {
  index (hive) {
    return Api().get('hives', {
      params: hive
    })
  },
  post (hive) {
    return Api().post('hives', hive)
  },
  delete (hiveId) {
    return Api().delete(`hives/${hiveId}`)
  },
  show (hiveId) {
    return Api().get(`hives/${hiveId}`)
  },
  put (hive) {
    return Api().put(`hives/${hive.id}`, hive)
  }
}
