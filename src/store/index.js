import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    data: "",
    file: ""
  },
  plugins: [createPersistedState()],
  getters: {
  },
  mutations: {
    savedChanges(state, {newData, newFile}) {
      state.data = newData; 
      state.file = newFile;
    },
  },
  actions: {
  },
  modules: {
  }
})

