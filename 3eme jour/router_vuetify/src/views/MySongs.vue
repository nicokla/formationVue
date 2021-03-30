<template>
  <div class="MySongs">
    <h1 class="subheading grey--text">My songs</h1>

    <v-container class="my-5">
      <transition-group name="fade">
        <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="song in songs" :key="song.id">
          <v-row class="d-flex justify-space-around">
            <v-cols cols=8>
              <v-list-item-title class="headline mb-1">
                <router-link :to="{name: 'song', params: {id: song.id} }">{{song.title}}</router-link>
                
              </v-list-item-title>
            </v-cols>
            <v-cols cols=4>
              <v-btn icon color=red @click="deleteSong(song.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-cols>
          </v-row>
        </v-card>
      </transition-group>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs:[]
    }
  },
  methods: {
    async addItem(){
      // appel API
		},
		deleteSong(id){
			// appel API
		}
  },
  async mounted() {
    // appel API
    this.songs=[
      {title: 'song 1', id: 1},
      {title: 'song 2', id: 2}
    ]
  },
}

</script>
