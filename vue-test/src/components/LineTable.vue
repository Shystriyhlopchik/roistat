<template>
<div v-if="user.subordinate">
  <tr>
    <td>{{user.name}}</td>
    <td>{{user.number}}</td>
  </tr>
  <tr class="blue-text" v-for="us in user.subordinate" :key="us.number">
    <td class="padding__text">{{us.name}}</td>
    <td>{{us.number}}</td>
  </tr>
</div>
<div v-else>
  <tr>
    <td>{{user.name}}</td>
    <td>{{user.number}}</td>
  </tr>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  name: 'line-table',
  props: ['user']
}
</script>

<style scoped>
  .padding__text {
    padding-left: 30px;
  }
</style>
