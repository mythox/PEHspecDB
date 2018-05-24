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
  getAlloyCat (search) {
    return Api().get(`/getalloycat/${search}`)
  },
  getAlloyCode (search) {
    return Api().get(`/getalloycode/${search}`)
  },
  getHardness (search) {
    return Api().get(`/gethardness/${search}`)
  },
  getDimension (search) {
    return Api().get(`/getdimension/${search}`)
  },
  getLength (search) {
    return Api().get(`/getlength/${search}`)
  }
}
