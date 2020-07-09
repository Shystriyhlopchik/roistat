export default {
  actions: {
    async createUser({dispatch, commit}, {name, number, parent}) {
      try {
        localStorage.setItem(number, name);
      } catch(e){

      }
    }
  }
}
