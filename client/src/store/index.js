import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMaterials: null,
    isUpdated: 'true'
  },
  mutations: {
    add (state, payload) {
      state.loadedMaterials = payload
      console.log('material ready')
    },
    isUpdated (state, payload) {
      state.isUpdated = payload
    }
  },
  actions: {},
  getters: {
    loadedMaterials (state) {
      return state.loadedMaterials.sort((materialA, materialB) => {
        return materialA.MaterialNum < materialB.MaterialNum
      })
    },
    slicedMaterials (state, getters) {
      return getters.loadedMaterials.slice(0, 5)
    },
    loadedMaterial (state) {
      return (materialId) => {
        return state.loadedMaterials.find((material) => {
          return material.MaterialNum === materialId
        })
      }
    },
    isUpdated (state) {
      return state.isUpdated
    }
  }
})
