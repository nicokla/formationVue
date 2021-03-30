<template>
  <div class="Home">
    <h1 class="subheading grey--text">Home</h1>

    <v-container class="my-5">
      <p>Home</p>
    </v-container>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: []
    }
  },
  async mounted(){
    if(true){ // isLoggedIn()
      this.$router.push('mySongs')
    } else {
      this.$router.push('signIn')
    }
	},
  methods:{
  }
}
</script>
