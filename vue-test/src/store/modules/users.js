const state = {
  users: {}
}

const getters = {
  users: state => state.users
}

const actions = {
  initStore: ({commit}) => {
    // axios.get('/static/users.json')
    // .then((response) => {
    //   console.log(response.data.users)
    //   commit('SET_STORE', response.data.users)
    // });
    const tempArray= []
    for(let key in localStorage) {
      if (Number(key)) {
        let obj = JSON.parse(localStorage[key])
        tempArray.push(obj)
      }
    }
    commit('SET_STORE', tempArray)
  } 
}

const mutations = {
  'SET_STORE' (state, users) {
    console.log(users)
    state.users = users;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
