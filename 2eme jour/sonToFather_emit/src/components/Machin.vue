<template>
  <div @click="maFonction">
    coucou je suis un composant
  </div>
</template>

<script>

export default {
  name: 'Machin',
  data(){
    return {
    }
  },
  methods:{
    maFonction(){
      console.log('Coucou, je suis le composant fils.')
      let dataChild = {nom:'Toto', surnom:'le heros'}
      console.log(`J'envoie les données %c${JSON.stringify(dataChild)}%c à mon pere.`, 'color:red;', 'color:white;')
      this.$emit('eventName', dataChild) // dataChild is optionnal
    }
  }
}
</script>

<style scoped>
div {
  cursor: pointer;
  opacity: 1;
	/* cursor: pointer; */
	background-color: #ffd6a7;
	border: 1px solid #000000;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	text-align: center;
}
</style>