import Vue from 'vue';
import Vuex from 'vuex';
// import savedData from './modules/savedData';


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    data: ""
  },
  getters: {
    savedData: (state) => state.data
  },
  mutations: {
    savedChanges: (state, newData) => 
    {state.data = newData;}
  },
  actions: {
  },
  modules: {
  }
})
