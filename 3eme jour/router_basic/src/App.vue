<template>
  <button id="onglet1" @click="goToOnglet1()">login</button>
  <button id="onglet2" @click="goToOnglet2()">register</button>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goToOnglet1(){
      this.$router.push({name: 'Login'})
    },
    goToOnglet2(){
      this.$router.push({name: 'Register'})
    },
  }
}
</script>

<style>
</style>