<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script>
import { defineProps, reactive, ref, onMounted, watch, toRefs } from 'vue'
// props, { attrs, slots, emit }

export default {
  props: {
    msg:  String,
  },
  setup(props, { attrs, slots, emit }) {
    console.log(props) // { user: '' }
    const state = reactive({ count: 0 })
    // const readersNumber = ref(0)
    return { state }
  }
}


</script>

<style scoped>
a {
  color: #42b983;
}
</style>