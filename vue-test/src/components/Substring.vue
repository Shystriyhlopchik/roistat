<template>
  <div class="tabel__substring"> 
    <div class="tabel__td tabel__td_lightgoldenrodyellow tabel__td_width_40">{{name}}</div>
    <div class="tabel__td tabel__td_lightgoldenrodyellow tabel__td_width_60">{{subordinate}}</div>
  </div>
</template>

<script>
export default {
  name: 'substring',
  props: {
    subordinate:{
      type: String,
      required: true
    }
  },
  data: () => ({
    name: '',
    number: ''
  }),
  async mounted() {
    this.name = await this.$store.dispatch('fetchRecordId', this.subordinate)
    this.number = this.subordinate
  }
}
</script>
