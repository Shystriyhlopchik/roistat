<template>
  <div class="input-field">
    <select ref="select">
      <option disabled value="">Нет данных</option>
      <option
        v-for="parent of parents"
        :key="parent.id"
        :value="parent">
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
      required: true
    }
  },
  data: () => ({
    select: null
  }),
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select)
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>
