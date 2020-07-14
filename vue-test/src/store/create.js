export default {
  actions: {
    async createUser({dispatch, commit}, {name, number, subordinate}) {
      try {
        let value = {
          name,
          number,
          subordinate
        }
        
        let objValue = JSON.stringify(value);
        localStorage.setItem(number, objValue);
        console.log(localStorage)
      } catch(e){ 
        throw e;
      }
    }
  }
}
