<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-if="!$store.state.isUserLoggedIn">
      <v-flex xs6 offset-xs3>
        <panel title="login">
          <v-text-field
            label="Email"
            v-model="email"
            autofocus
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            dark
            class="primary"
            @click="login">
            Login
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/Global/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Dashboard'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    redirect () {
      this.$router.push({
        name: 'Dashboard'
      })
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
