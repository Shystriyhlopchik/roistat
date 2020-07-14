import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
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
    users, create, parents
  }
})
