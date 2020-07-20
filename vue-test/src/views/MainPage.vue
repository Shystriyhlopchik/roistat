<template>
  <div class="page__main">
    <my-header/>

    <tabel />
  </div>  
</template>

<script>
import MyHeader from '@/components/MyHeader'
import Tabel from '@/components/Tabel'
export default {
  components: {
    MyHeader, Tabel
  }
}
</script>
