Login<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3>
      <v-card class="white elevation-2">
        <v-toolbar flat dense color="teal accent-4" dark>
          <v-toolbar-title class="white--text">Login</v-toolbar-title>
        </v-toolbar>
        <div class="pr-4 pl-4 pt-2 pb-2" >
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
          <br>
          <div v-html="error" class="error" v-if="error"/>
          <v-btn
            outline color="teal accent-4"
            @click="login">
            Login
          </v-btn>
          <br>
          <div>
            <v-alert outline color="error" v-html="error" :value="error">
            </v-alert>
          </div>
          <br>
          <router-link to="register">
          <span class="pt-3 register pb-3">
            <a>Create Account</a>
          </span>
        </router-link>
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
    async login () {
      try {
        await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
      } catch (error) {
        console.log('error-----', error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.register {
  display: inline-block;
  padding-left: 5px;
}
.register a {
  color: #00bfa5!important
}
</style>
