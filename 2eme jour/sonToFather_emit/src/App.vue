<template>
  <Machin v-for="truc in trucs" @eventName="functionFather($event, truc)">
  </Machin>

<br>
  <Machin @eventName="functionFather2($event)">
  </Machin>
  
  <!-- <br> <br>
  <BasicInput :value="email" @input="gotAnInput($event)" /> --> -->
  <!-- {{ email }}
</template>

<script>
import Machin from './components/Machin.vue'
import BasicInput from './components/BasicInput.vue'

export default {
  name: 'App',
  components: {Machin, BasicInput},
  methods:{
    gotAnInput(someData){
      console.log('heho', someData)
      this.email = someData.target.value
    },
    functionFather(dataChild, dataFather){
      console.log('Ici papa, bien reçu fiston.')
      console.log(`Data child: ${JSON.stringify(dataChild)} / data father: ${dataFather}`)
    },
    functionFather2(dataChild){
      console.log('Ici papa, bien reçu fiston (1 seul argument).')
      console.log(`Data child: ${JSON.stringify(dataChild)}`)
    }
  },
  data(){
    return {
      trucs:['hey', 'yo'],
      yolo: 'salut',
      email: ''
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