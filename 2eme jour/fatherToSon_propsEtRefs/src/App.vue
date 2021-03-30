<template>
  <div>
    <Machin ref="monBidule" :param="yolo" myColor="red"></Machin>
    <input type="text" v-model="yolo"/>
    <p style="background-color: green;">
      {{yolo}}
    </p>
  </div>
</template>

<script>
import Machin from './components/Machin.vue'

export default {
  name: 'App',
  components: {Machin},
  data(){
    return {
      yolo: 'salut'
    }
  },
  mounted(){
    this.$refs.monBidule.printMessage()
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