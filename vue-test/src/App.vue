<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  computed: {
    layout() {
      let layout = (this.$route.meta.layout || 'main') + '-layout'
      return layout
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="css">
@import '~materialize-css/dist/css/materialize.css';
@import './assets/style/index.css';
</style>
