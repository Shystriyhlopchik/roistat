<template>
  <main class="header__body">
    <div class="table">
      <ul class="tabel__header-tr">
        <li class="tabel__th">Имя</li>
        <li class="tabel__th">Телефон</li>
      </ul>
      <div class="tabel__row-main">
        <p class="center" v-if="!records.length">Записей пока нет</p>
        <!-- место куда вставляются строки -->
        <tabel-row v-else
          v-for="record in records"
          :key="record.id"
          :record="record"
        />

      </div>
      <router-link tag="button" class="tabel__but" :to="{name: 'Create'}">Добавить</router-link>
    </div>
  </main>

</template>

<script>
import TabelRow from './TabelRow'
import Loader from '@/components/Loader'
export default {
  name: 'tabel',
  data: () => ({
    records: [],
    loading: false
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.loading = false
  },
  components: {
    TabelRow, Loader
  }
}
</script>
