<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="hello" />
  <MyComponent :msg="hello" />
  <input v-model="hello" type="text"/>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted, watch, toRefs } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'

// const state = reactive({ myMessage: 'coucou' })
const hello = ref('world')

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>