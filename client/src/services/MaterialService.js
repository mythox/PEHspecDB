import Api from '@/services/Api'

export default {
  getOneSpec (spec) {
    return Api().post('getSpec', spec)
  },
  getTest () {
    return Api().get('')
  }
}
