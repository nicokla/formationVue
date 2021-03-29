<template>

<p>
  Nom complet : {{ getName() }}
</p>

</template> 

<script>
export default {
  name: 'NomComplet',
  props: {
    monPrenom: {
      type: String,
      default: ''
    },
    monNom: {
      type: String,
      default: ''
    },
  },
  data(){
    return {
    }
  },
  methods:{
    getName(){
      return this.monPrenom + ' ' + this.monNom
    }
  },
  computed:{
    nomComplet(){
      return this.monPrenom + ' ' + this.monNom
      // `${this.prenom} ${this.nom}`
    }
  }
}
</script>

<style>
</style>