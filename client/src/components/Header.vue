<template>
  <v-toolbar flat color="teal accent-4" fixed>
    <router-link to="/home">
      <v-toolbar-title class="white--text mr4">TabTracker</v-toolbar-title>
    </router-link>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="login" v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark class="mt-3">
          Sign In
        </v-btn>
      </router-link>
      <v-btn flat dark class="logout" v-if="$store.state.isUserLoggedIn" @click='logout'>
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: '/home'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout {
  padding-top: 5px;
}
</style>
