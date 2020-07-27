<template>
  <div class="tabel__block" v-on:click="isOpen = !isOpen">
    <div class="tabel__row">
      <div class="tabel__td tabel__td_cursor-pointer tabel__td_width_40" @click="$emit('click')" v-if="record.subordinate != 0">
        <img src="../../public/img/icons/download.svg" width="10px" height="10px" alt="">
        {{record.name}}
      </div>
      <div class="tabel__td tabel__td_width_40" @click="$emit('click')" v-else>
        {{record.name}}
      </div>
      <div class="tabel__td tabel__td_width_60">{{record.id}}</div>
    </div>

    <substring 
      v-for="subordinate in record.subordinate"
      :key="subordinate" 
      :subordinate="subordinate"
      :class="{tabel__tr_display: !isOpen}"
    />
  </div>
</template>

<script>
import Substring from './Substring'
export default {
  name: 'tabel-row',
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isOpen: false
  }),
  components: {
    Substring
  }
}
</script>
