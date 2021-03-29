<template>

<input type="text" v-model="prenom">
{{ petitTexte }}
<input type="text" v-model="nom">
<br>

<NomComplet v-bind:monPrenom="prenom"
            v-bind:monNom="nom">
</NomComplet>

<br>

<!--
<ul>
  <li v-for="element in myListe">
    {{ element }}
  </li>
</ul> 
-->

<!-- 
  <button @click="doubler()">doubler</button> 
  -->

<!-- 
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>

<br>
<br>
<br>
<div id="v-model-select-dynamic" class="demo">
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
<p v-bind:style="getStyle()">salut</p> 

-->
</template> 

<script>
import NomComplet from './components/NomComplet.vue'

export default {
  name: 'App',
  components: { NomComplet },
  data(){
    return {
      prenom: '',
      nom: '',
      // myListe: ['aaa', 'bbb', 'ccc'],
      // checked: true,

      // selected: 'red',
      // options: [
      //   { text: 'One', value: 'red' },
      //   { text: 'Two', value: 'blue' },
      //   { text: 'Three', value: 'green' }
      // ],
    }
  },
  methods:{
    getStyle(){
      return `font-size:25px; color: ${this.selected};`
    },
    doubler(){ 
      // this.petitTexte = this.petitTexte + this.petitTexte
      this.petitTexte = `${this.petitTexte}${this.petitTexte}`
    },
    // nomComplet(){
    //   return this.prenom + ' ' + this.nom
    //   // `${this.prenom} ${this.nom}`
    // }
  },
  computed:{
    // nomComplet(){
    //   return this.prenom + ' ' + this.nom
    //   // `${this.prenom} ${this.nom}`
    // }
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