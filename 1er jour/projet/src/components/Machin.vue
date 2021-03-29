<template>
<li>
  {{ myElement.title }}
  <button @click="deleteElement()">
    delete
  </button>
</li>
</template>

<script>

export default {
  name: 'Machin',
  props:{
    myElement: {
      type: Object,
      default: {title: 'titi', priority: 'high'}
    },
  },
  data(){
    return {
      truc: 'ptit texte',
      // myElement: {title: 'titi', priority: 'high'}
    }
  },
  mounted(){
    this.showProps()
    // this.changeProps()
  },
  methods:{
    deleteElement(){
      console.log(this.myElement.title)
      this.$emit('deleteEvent', this.myElement.id) // data is optionnal
    },
    showProps(){
      console.log(this.myElement)
    },
    // changeProps(){
    //   this.myElement.title = 'toto'
    // }
  }
}

</script>

<style>
</style>