<template>
  <v-toolbar flat color="teal accent-4" fixed>
    <router-link to="/">
      <v-toolbar-title class="white--text mr4">TabTracker</v-toolbar-title>
    </router-link>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="login">
        <v-btn flat dark class="mt-3">
          Sign In
        </v-btn>
      </router-link>
        <!-- <router-link to="register">
          <v-btn flat dark>
            Sign Up
          </v-btn>
        </router-link> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
