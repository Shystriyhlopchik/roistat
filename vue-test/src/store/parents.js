export default {
  actions: {
    fetchParents() {
      try {
        const arrayParents = []
        const arrayKey = Object.keys(localStorage)
        for (let i=0; i < arrayKey.length; i++) {
          if (arrayKey[i] === "loglevel:webpack-dev-server") {
            continue;
          }
          let key = arrayKey[i]
          let user = JSON.parse(localStorage[key])

          arrayParents.push({
            name: user.name,
            parent: user.parent,
            number: key
          })
        }
        return arrayParents
      } catch(e) {
        console.log('error')
      }
    }
  }
}
