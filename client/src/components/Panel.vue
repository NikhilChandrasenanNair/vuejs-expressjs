<template>
  <v-card class="white elevation-2">
    <v-toolbar flat dense color="teal accent-4" dark>
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="pr-4 pl-4 pt-2 pb-2" >
      <slot>
        No Slot content
      </slot>
    </div>
  </v-card>

</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
