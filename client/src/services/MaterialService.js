import Api from '@/services/Api'
import {store} from '@/store'

export default {
  getSpec (spec) {
    return Api().get(`/getspec/${spec}`)
  },
  getSpecs () {
    return Api().get('/getspecs')
    // .then((response) => {
    //   store.commit('add', response.data)
    // })
    // .catch((err) => {
    //   throw err
    // })
  },
  getNewSpec (spec) {
    return Api().get(`/getnewspec/${spec}`)
  },
  getNewSpecs () {
    return Api().get('/getnewspecs')
  },
  getSpecsVuex () {
    return Api().get('/getspecs')
    .then((response) => {
      store.commit('add', response.data)
    })
    .catch((err) => {
      throw err
    })
  }
}
