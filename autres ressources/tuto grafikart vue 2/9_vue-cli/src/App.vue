<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './Counter.vue'

export default {
  name: 'App',
  data(){
    return {
      msg: 'Hello Vue 2.0 !'
    }
  },
  components: {
    Counter
    // HelloWorld
  }
}
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
