<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3>
      <v-card class="white elevation-2">
        <v-toolbar flat dense color="teal accent-4" dark>
          <v-toolbar-title class="white--text">Register</v-toolbar-title>
        </v-toolbar>
        <div class="pr-4 pl-4 pt-2 pb-2" >
          <form name="tab-tracker-form">
            <v-text-field
              label="Username"
              type="text"
              name="username"
              v-model="username"
              required
              >
            </v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              name="password"
              v-model="password"
              required
              >
            </v-text-field>
          </form>
          <br>
          <!-- <div v-html="error" class="error" v-if="error"/> -->
          <div>
            <v-alert outline color="error" v-html="error" :value="error">
            </v-alert>
          </div>
          <v-btn
            outline color="teal accent-4"
            @click="register">
            Register
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
.error--text {
  padding: 8px !important;
}
</style>
