<template>
  <Machin v-for="truc in trucs" ref="monMachin" @eventName="functionFather($event, truc)">
  </Machin>
</template>

<script>
import Machin from './components/Machin.vue'

export default {
  name: 'App',
  components: {Machin},
  methods:{
    functionFather(dataChild, dataFather){
      console.log('Ici papa, bien reçu fiston.')
      console.log(`Data child: ${JSON.stringify(dataChild)} / data father: ${dataFather}`)
    }
  },
  data(){
    return {
      trucs:['hey', 'yo'],
      yolo: 'salut'
    }
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