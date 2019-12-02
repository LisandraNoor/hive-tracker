import Api from '@/services/Api'

export default {
  index () {
    return Api().get('treatments')
  },
  post (treatment) {
    return Api().post('treatments', treatment)
  }
}
