const state = {
  users: {}
}

const getters = {
  users: state => state.users
}

const actions = {
  initStore: ({commit}) => {
    axios.get('/static/users.json')
    .then((response) => {
      commit('SET_STORE', response.data.users)
    });
  }
}

const mutations = {
  'SET_STORE' (state, users) {
    state.users = users;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
