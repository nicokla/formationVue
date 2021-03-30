<template>
  <div id="Songs" class="paddedContainer">
    <h1 class="subheading grey--text">Songs</h1>
    <div class="listOfSongs">
      <SongCell v-for="song in songs" :theSong="song"
          @deleteEvent="deleteSong(song.id)"
          @click="openSong(song)"/>
    </div>
  </div>
</template>


<script>
import SongCell from '../components/SongCell.vue'

export default {
  components: { SongCell },
  data() {
    return {
      songs: [
        {id: 1, title: 'song 1', ownerName: 'owner 1'},
        {id: 2, title: 'song 2', ownerName: 'owner 2'},
      ]
    }
  },
  methods:{
		async deleteSong(id){
      let result = confirm(`Want to delete the song ?`);
      if (result) {
        try{
          // delete in db...
          this.songs = this.songs.filter(x => {
            return x.id != id;
          })
        }catch(err){
          window.alert(`Error: ${err}`)
        }
      }
		},
    openSong(song){
      this.$router.push({name: 'Song', params: {id: song.id} })
    }
  },
  async mounted() {
  },
}
</script>

<style scoped>
.content h1:not(:first-child) {
  margin-top: 3px;
}

#MySongs{
  --tw-bg-opacity: 1;
  background-color: rgba(254, 243, 199, var(--tw-bg-opacity));	
}

.listOfSongs {
  padding-top: 2mm;
  padding-bottom: 2mm;

	display: flex;
  flex-direction:column;
  flex-wrap:nowrap;
	/* flex-flow: row wrap; */
	justify-content:flex-start;
  align-items:stretch;
  align-content:center;
}
</style>