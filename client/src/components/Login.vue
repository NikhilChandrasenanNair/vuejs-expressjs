<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3>
      <panel :title="title">
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
          {{title}}
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
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null,
      title: 'Login'
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log('error-----', error)
        this.error = error.response.data.error
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
