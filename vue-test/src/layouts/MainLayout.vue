<template>
  <div class="page__main">
    <header class="header">
      <div class="header__img">
        <img src="@/assets/images/logo_transparent.png" alt="Roistat">
      </div>
    </header>

    <router-view />
    
  </div>  
</template>

<script>
export default {
  name: 'main-layout'
}
</script>
