<template>
<div>
  Login
  <br> <br>
  <button @click="goToOnglet1()">sub page 1</button>
  <button @click="goToOnglet2()">sub page 2</button>

  <router-view></router-view>
</div>


</template>

<script>
// Will be a modal later
export default {
  data() {
    return  {
      user: {
        // email: 'admin@example.com',
        // password: 'admin',
        // name: 'John Doe',
      },
      options: {
        // isLoggingIn: true,
        shouldStayLoggedIn: false
      },
    }
  },
  async mounted(){
	},
  methods:{
    goToOnglet1(){
      this.$router.push({name: 'SubPage1'})
    },
    goToOnglet2(){
      this.$router.push({name: 'SubPage2'})
    },
    enterWebSite(){
      this.$router.push({name:'Songs'})
    },
    async login(){
      // if database login ok...
      this.enterWebSite()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
