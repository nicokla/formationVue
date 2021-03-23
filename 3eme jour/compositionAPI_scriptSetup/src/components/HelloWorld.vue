<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted, watch, toRefs } from 'vue'
// props, { attrs, slots, emit }

// https://v3.vuejs.org/guide/composition-api-setup.html#arguments
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>