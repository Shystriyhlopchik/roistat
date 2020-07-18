import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users' // временное решение
import record from './modules/record'
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
  getters: {
    
  },
  modules: {
    record, users, create, parents
  }
})
