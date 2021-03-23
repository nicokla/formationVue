More on components :

1) component life cycle
  created
  mounted
  unmounted

vue 2:
https://fr.vuejs.org/v2/guide/instance.html#Diagramme-du-cycle-de-vie
vue 3 (destroyed deviens unmounted):
https://v3.vuejs.org/api/options-lifecycle-hooks.html

---------------
---------------

2) parent/child component communication

references documentation vue
https://v3.vuejs.org/guide/component-props.html
https://v3.vuejs.org/guide/component-custom-events.html

***********
2.1) father to son communication: props et refs
projet --> ./fatherToSon_propsEtRefs

(don't forget to include component in components field of father)


2.1.1) props : pass variables (reactive) from parent to child
<TheComponent parametre="..." />
2 syntaxes possibles (basique ou avec verification de type et default):

props:["param"],

props:{
  param: {
    type: Number,
    default: 6
  },
},


Petit detail : pour citer une props depuis une fonction on peut utiliser
this.nomDeLaVariable
de façon identique aux variables qui sont dans data. La difference est que la props viens du composant parent et ne peux etre modifié par le composant (alors que pour data le composant peut le modifier).
Aussi, pareil que les data, on peut faire {{ nomDeLaVariable }} sans meme mettre this quand on
la designe dans la partie html.



2.1.2) $refs : appeler une fonction from parent to child

<TheComponent ref="myComponent" />
this.$refs.myComponent.anInterestingFunction(argument1, argument2)
this.$refs.myComponent.$forceUpdate() --> bon a connaitre au cas ou mais normalement inutile si on utilise bien les props




*********
2.2) son to father communication: custom events with $emit
project : sonToFather_emit

remove children, use $emit in vue:
https://stackoverflow.com/questions/40181133/delete-a-vue-child-component
https://jsfiddle.net/mani04/4kyzkgLu/
https://www.youtube.com/watch?v=5pvG6fzkdFM    (tuto net ninja)

-   child component side :
functionChild(){
  this.$emit('eventName', dataChild) // data is optionnal
}

-   father component side :
<componentChild v-on:eventName="functionFather($event, dataFather)" // $event is optionnal
function functionFather(dataChild, dataFather){...} // data is optionnal




------------------

2.3) aparté : comment est fait v-model en fait (prop + emit)

https://www.digitalocean.com/community/tutorials/how-to-add-v-model-support-to-custom-vue-js-components


exemple côté père:
<basic-input v-model="email" />
equivalent à
<input :value="email" @input="e => email = e.target.value" />

exemple côté fils:
<template>
  <input @input="handleInput" />
</template>
<script>
export default {
  prop: ['value'],
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }
}
</script>



---------------
---------------

3) Non reactive variables

data : internals objects, reactifs
this.$options : object pas reactifs


