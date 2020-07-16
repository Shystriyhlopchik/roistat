<template>
  <div class="page__main">
    <my-header/>
    <my-main/>
  </div>  
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyMain from '@/components/MyMain'
export default {
  components: {
    MyHeader, MyMain
  }
}
</script>
