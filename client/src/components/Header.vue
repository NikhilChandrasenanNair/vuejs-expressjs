<template>
  <v-toolbar flat color="blue-grey" fixed>
    <router-link to="HelloWorld">
      <v-toolbar-title class="white--text mr4">TabTracker</v-toolbar-title>
    </router-link>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <router-link to="register">
          <v-btn flat dark>
            Sign Up
          </v-btn>
        </router-link>
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
