<template>
  <h1>Truc 3</h1>
  <button @click="logout()">logout</button>
</template>

<script>
// Will be a modal later
export default {
  data() {
    return {
    }
  },
  methods:{
    logout(){
      this.$router.push({name:'Login'})
    }
  }
}
</script>

<style scoped>
button{
  background-color: white;
  border-width: 1px;
  border-color: black;
  border-radius: 2px;
}
</style>