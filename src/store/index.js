import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: ""
  },
  getters: {
  },
  mutations: {
    saveChanges: (state, connections) => 
    {state.storedChanges = connections;}
  },
  actions: {
  },
  modules: {
  }
})
