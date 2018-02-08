<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3>
      <panel :title="title">
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
          {{title}}
        </v-btn>
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
      title: 'Register',
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
  },
  components: {
    Panel
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
