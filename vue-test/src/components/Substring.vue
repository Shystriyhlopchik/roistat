<template>
  <div class="tabel__row tabel__tr_padding-left"> 
    <div class="tabel__td">{{name}}</div>
    <div class="tabel__td">{{subordinate}}</div>
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
