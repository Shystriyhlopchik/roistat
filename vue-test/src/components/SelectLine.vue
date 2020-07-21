<template>
  <div class="input-field">
    <select ref="select" v-model="order.parent" :class="updateValue">
      <option disabled value="">Нет данных</option>
      <option 
        v-for="parent of parents"
        :key="parent.id"
        :value="parent.id">
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
    select: null,
    order:{
      parent: ''
    }
  }),
  mounted() {
    setTimeout(()=>{
      this.select = M.FormSelect.init(this.$refs.select)
    }, 50)
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>
