<template>
<input type="text" v-model="myTodo.title">

<button @click="addElement()">add</button>
<ul>
  <Machin v-for="element in liste" 
  v-bind:myElement="element"  
  v-on:deleteEvent="deleteElement($event)"
  ></Machin>
</ul>
<br> <br>
  
<MyComponent v-bind:variable="myTodo.title"></MyComponent>

</template>

<script>
import Machin from './components/Machin.vue'
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: { Machin, MyComponent },
  data(){
    return {
      myTodo:{title:'', priority: 'high'},
      liste:[ // middle high low
        {id:0, title: '1er todo', priority: 'high'},
        {id:1, title: '2eme todo', priority: 'middle'},
      ]
    }
  },
  methods:{
    addElement(){
      this.liste.push({
        id: this.liste.length,
        title: this.myTodo.title,
        priority: 'high'
      })
    },
    deleteElement(id){
      console.log('coucou '+id)
      // this.liste.filter(el => el.id != id)
      this.liste.splice(this.liste.findIndex(e => e.id === id),1)
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>