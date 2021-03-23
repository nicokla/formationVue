<template>
<p>{{param}}</p>
</template>

<script>

export default {
  name: 'Machin',
  props:["param"],
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
    }
  }
}
</script>

<style>
</style>