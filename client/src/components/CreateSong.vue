<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
      <panel :title="panelTitle">
        <v-text-field
          label="Title"
          type="text"
          name="title"
          v-model="song.title"
          required
          >
        </v-text-field>
        <v-text-field
          label="Artist"
          type="text"
          name="artist"
          v-model="song.artist"
          required
          >
        </v-text-field>
        <v-text-field
          label="Genre"
          type="text"
          name="genre"
          v-model="song.genre"
          required
          >
        </v-text-field>
        <v-text-field
          label="Album"
          type="text"
          name="album"
          v-model="song.album"
          required
          >
        </v-text-field>
        <v-text-field
          label="Album Image Url"
          type="text"
          name="albumImageUrl"
          v-model="song.albumImageUrl"
          required
          >
        </v-text-field>
        <v-text-field
          label="Youtube Url"
          type="text"
          name="youtubeId"
          v-model="song.youtubeId"
          required
          >
        </v-text-field>
        <v-btn
          outline color="teal accent-4"
          @click="create">
          Create Song
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      panelTitle: 'Song Metadata',
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.saveSongs(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
