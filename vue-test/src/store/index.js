import Vue from 'vue'
import Vuex from 'vuex'
import create from './create'
import parents from './parents'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {}
  },
  mutations: {
    'SET_STORE' (state, users) {
      state.users = users;
    }
  },
  actions: {
    initStore: ({commit}) => {
      axios.get('/static/users.json')
      .then((response) => {
        console.log(response.data.users)
        commit('SET_STORE', response.data.users)
      });
    }
  },
  getters: {
    users: state => state.users
  },
  modules: {
    create, parents
  }
})
