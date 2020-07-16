<template>
  <div class="input-field">
    <select ref="select" v-model="order.parent">
      <option disabled value="">Нет данных</option>
      <option
        v-for="parent in parents"
        :key="parent.id"
        :value="parent.name">
        {{parent.name}}
      </option>
    </select>
    <label>Выберите начальника</label>
  </div>
</template>

<script>
export default {
  props: {
    parents: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    select: null,

    order:{
      parent: ''
    }
  }),
  async mounted() {
    // this.parents = await this.$store.dispatch('fetchParents')
    this.select = await M.FormSelect.init(this.$refs.select)
    console.log(this.parents)
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>
