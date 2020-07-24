<template>
  <div class="page__main">
    <header class="header">
      <div class="header__img">
        <img src="@/assets/images/logo_transparent.png" alt="Roistat">
      </div>
      <div class="header__title">
        <h1>Телефонный справочник компании (beta)</h1>
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
