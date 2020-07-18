export default {
  actions: {
    // Функция для получения записей из localeStorage
    async fetchRecords() {
      try {
        const arrayRecords = []

        for(let key in localStorage) {
          // Избавляемся от записи "loglevel:webpack-dev-server" в localStorage 
          if (Number(key)) {
            let record = JSON.parse(localStorage[key])
            arrayRecords.push({
              id: key,
              name: record.name,
              subordinate: record.subordinate
            })
          }
        }
        return arrayRecords
      } catch(e) {
        console.log('error')
      }
    },

    async fetchRecordId({}, id) {
      try {
        const record = localStorage.getItem(id)
        const obj = JSON.parse(record)
        return obj.name
      } catch (e){
        console.log('error')
      }
    }
  }
}
