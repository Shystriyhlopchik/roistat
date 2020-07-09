import Vue from 'vue'
import Vuex from 'vuex'
import create from './create'
import parents from './parents'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    create, parents
  }
})
