<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3>
        <panel title="Songs">
          <div>

          </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = await SongsService.index()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
