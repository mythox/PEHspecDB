import Api from '@/services/Api'

export default {
  getSpec (search) {
    return Api().get(`/getspec/${search}`)
  },
  getSpecs () {
    return Api().get('/getspecs')
  },
  getNewSpec (search) {
    return Api().get(`/getnewspec/${search}`)
  },
  getNewSpecs () {
    return Api().get('/getnewspecs')
  },
  getMatProp (search) {
    return Api().get(`/getmatprop/${search}`)
  },
  getMatArea (search) {
    return Api().get(`/getmatarea/${search}`)
  }
}
