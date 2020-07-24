<template>
  <div class="page__main">
    <header class="header">
      <div class="header__img">
        <img src="@/assets/images/logo_transparent.png" alt="Roistat">
      </div>
    </header>

    <tabel />
  </div>  
</template>

<script>
import Tabel from '@/components/Tabel'
export default {
  name: 'main-layout',
  components: {
    Tabel
  }
}
</script>
