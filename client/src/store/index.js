import Vue from 'vue'
import Vuex from 'vuex'
// import MaterialService from '@/services/MaterialService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMaterials: [
      {
        materialNum: '1B-39266H',
        preparedBy: 'aisha',
        description: '0.508 x 58',
        businessUnit: 'P'
      },
      {
        materialNum: '1A-65487H',
        preparedBy: 'peter',
        description: '0.311 x 74',
        businessUnit: 'A'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMaterials (state) {
      return state.loadedMaterials
    },
    loadedMaterial (state) {
      return (materialId) => {
        return state.loadedMaterials.find((material) => {
          return material.MaterialNum === materialId
        })
      }
    }
  }
})
