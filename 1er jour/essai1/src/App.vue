<template>

{{ petitTexte }}
<br>
<input type="text" v-model="petitTexte">
<br>
<ol>
  <li v-for="truc in listeDeTrucs" @click="printInfo(truc)">
    {{ truc }}
  </li>
</ol>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      petitTexte: '',
      listeDeTrucs: ['coucou', 'heho', 'salut']
    }
  },
  methods:{
    printInfo(truc){
      console.log(truc)
    }
  }
}
</script>

<style>
</style>