<template>
  <main class="header__body">
    <div class="table">
      <ul class="tabel__header-tr">
        <li class="tabel__th">Имя</li>
        <li class="tabel__th">Телефон</li>
      </ul>
      <div class="tabel__row-main">
        <!-- место куда вставляются строка -->
        <div class="" v-for="record in records" :key="record.id">
          <div class="tabel__row">
            <div class="tabel__td">{{record.name}}</div>
            <div class="tabel__td">{{record.id}}</div>
          </div>
          <substring 
            v-for="subordinate in record.subordinate"
            :key="subordinate" 
            :subordinate="subordinate"/>
        </div>
      </div>
      <router-link tag="button" class="tabel__but" :to="{name: 'Create'}">Добавить</router-link>
    </div>
  </main>

</template>

<script>
import Substring from './Substring'
export default {
  name: 'tabel',
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  components: {
    Substring
  }
}
</script>
