export default {
  actions: {
    async createUser({dispatch, commit}, {name, number, parent}) {
      try {
        let value = {
          name,
          parent
        }
        
        let objValue = JSON.stringify(value);
        localStorage.setItem(number, objValue);
      } catch(e){ 
        throw e;
      }
    }
  }
}
