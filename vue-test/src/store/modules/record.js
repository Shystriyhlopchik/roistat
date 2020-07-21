export default {
  actions: {
    // Функция для получения записей из localeStorage
    fetchRecords() {
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

    fetchRecordId({}, id) {
      try {
        const record = localStorage.getItem(id)
        const obj = JSON.parse(record)
        return obj.name
      } catch (e){
        console.log('error')
      }
    },

    createRecord({},data) {
      try{
        const parent = data.parent 
        if (parent) { // ищем начальника по id и записываем подчиненного
          const record = localStorage.getItem(parent) // повторяющийся
          const obj = JSON.parse(record)              // фрагмент
          
          obj.subordinate.push(data.number)
          let objValue = JSON.stringify(obj);
          localStorage.setItem(obj.number, objValue);
          console.log(localStorage)
        }
        const value = {
          name: data.name,
          number: data.number,
          subordinate: []
        }

        let objValue = JSON.stringify(value);
        localStorage.setItem(data.number, objValue);
      } catch(e){
        console.log('ошибка при создании пользователя')
      }
    }
  }
}
