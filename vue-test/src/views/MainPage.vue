<template>
  <div class="page__main">
    <my-header/>

    <Loader v-if="loading" />
    <p class="center" v-else-if="!records.length">Записей пока нет</p>
    <tabel :records="records" v-else/>
  </div>  
</template>

<script>
import MyHeader from '@/components/MyHeader'
import Tabel from '@/components/Tabel'
import Loader from '@/components/Loader'
export default {
  data: () => ({
    records: [],
    loading: true
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.loading = false
  },
  components: {
    MyHeader, Loader, Tabel
  }
}
</script>
