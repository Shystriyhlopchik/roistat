<template>
  <div class="input-field">
    <select ref="select">
      <option
        v-for="p of parents"
        :key="p.number"
        :value="p.number"
      >
        {{p.name}}
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
