<template>


<!-- <Machin></Machin> -->

{{ petitTexte }}
<br>
<input type="text" v-model="petitTexte" @input="changed()">
<br>
<ol>
  <li v-for="truc in listeDeTrucs" @click="printInfo(truc)">
    {{ truc }}
  </li>
</ol>

<br>

<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>


<div id="v-model-select-dynamic" class="demo">
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>

<h1 v-if="checked">Vue est extraordinaire !</h1>
<h1 v-else>Oh non 😢</h1> 

<div>
  <h1 :style="`${computeStyle()}`">super</h1>
</div>

{{compteur}}
  <input type="range" v-model="compteur"   min="0" max="40" step="1">
triple: {{ triple }}


<div id="v-model-select-dynamic" class="demo">
  <select v-model="selected2">
    <option v-for="option in options2" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ getClasse() }}</span>
</div>

<h1 v-bind:class="selected2">coucou</h1>
</template>

<script>
import Machin from './components/Machin.vue'
// import Info from './components/Info.vue'

export default {
  name: 'App',
  components: { Machin },
  data(){
    return {
      compteur: 0,
      selected: 'red',
      options: [
        { text: 'One', value: 'red' },
        { text: 'Two', value: 'blue' },
        { text: 'Three', value: 'green' }
      ],
      selected2: 'texte-noir',
      options2:[
        { text: 'One', value: 'texte-noir' },
        { text: 'Two', value: 'texte-rouge' },
      ],

      checked: true,
      petitTexte: '',
      listeDeTrucs: ['coucou', 'heho', 'salut', 'Paris'],
      variable123: 10,
    }
  },
  methods:{
    printInfo(truc){
      console.log(truc)
    },
    changed(){
      console.log('changed.')
    },
    computeStyle(){
      return `color:${this.selected};
              font-size:${this.compteur}px;
              font-weight: 10;`
    },
    getClasse(){
      return this.selected2
    }
  },
  computed:{
    triple(){
      return 3 * this.compteur
    }
  }
}
</script>

<style scoped>

.texte-noir{
  color: black;
}

.texte-rouge{
  color: red;
}
</style>