<template>
<p v-bind:style="getStyle()">{{param}}</p>
</template>

<script>

export default {
  name: 'Machin',
  props:["param",'myColor'],
  // props:{
  //   param: {
  //     type: Number,
  //     default: 6
  //   },
  // },
  data(){
    return {
      truc: 'ptit texte'
    }
  },
  methods:{
    printMessage(){
      console.log('coucou')
    },
    getStyle(){
      return `background-color: ${this.myColor};`
    }
  }
}
</script>

<style>
p{
  
}
</style>