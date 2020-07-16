<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
export default {
  computed: {
    layout() {
      return 'empty-layout'
    }
  },
  components: {
    EmptyLayout
  }
}
</script>

<style lang="css">
@import '~materialize-css/dist/css/materialize.css';
@import './assets/style/index.css';
</style>
