<template>
  <div>
    <table class="striped directory__table">
      <thead>
        <div>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
          </tr>
        </div>
      </thead>

      <tbody>
        <LineTable v-for="user in users" :key="user.number" :user="user" />
      </tbody>
  </table>
  <div>
    <div></div>
  </div>
  <router-link tag="button" class="btn waves-effect waves-light auth-submit" 
    :to="{name: 'Create'}">
    {{buttonname}}
  </router-link>
  </div>
</template>

<script>
import LineTable from '@/components/LineTable';
import {mapGetters} from 'vuex';

export default {
  name: 'line-table',
  data() {
    return {
      buttonname: "Добавить",
    }
  },
  components: {
    LineTable
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  created: function() { // получаем всех зарегестрированных абонентов
    this.$store.dispatch('initStore')
  }
}
</script>
