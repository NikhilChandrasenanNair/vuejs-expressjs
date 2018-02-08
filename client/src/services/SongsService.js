import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('getSongs')
  },
  saveSongs (song) {
    return Api().post('saveSongs', song)
  }
}
