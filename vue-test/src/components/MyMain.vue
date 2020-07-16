<template>
  <main>
    <div class="header__body">
      <div class="table">
        <div class="tabel__header-tr">
          <div class="tabel__th">Имя</div>
          <div class="tabel__th">Телефон</div>
        </div>
        <div class="tabel__tr">
          <div class="tabel__td">Stephen C. Cox</div>
          <div class="tabel__td">8(925)858-32-32</div>
        </div>
        <div class="tabel__tr">
          <div class="tabel__td">Stephen C. Cox</div>
          <div class="tabel__td">8(925)858-32-56</div>
        </div>
        <div class="tabel__tr">
          <div class="tabel__td">Stephen C. Cox</div>
          <div class="tabel__td">8(925)858-32-56</div>
        </div>
        <div class="tabel__tr tabel__tr_padding-left">
          <div class="tabel__td">дима</div>
          <div class="tabel__td">8(925)858-32-56</div>
        </div>
        <div class="tabel__tr">
          <div class="tabel__td">Stephen C. Cox</div>
          <div class="tabel__td">8(925)858-32-55</div>
        </div>
        <router-link tag="button" class="tabel__but" :to="{name: 'Create'}">Добавить</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'my-main'
}
</script>
