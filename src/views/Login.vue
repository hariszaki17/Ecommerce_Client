<template>
  <div class="login d-flex align-items-center justify-content-center">
      <formLogin></formLogin>
  </div>
</template>

<script>
import formLogin from '../components/loginComp'

export default {
  name: 'Login',
  components: {
    formLogin
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('home')
    }
  }
}
</script>

<style>
    .login {
        width: 100vw;
        height: 100vh;
        background-color: magenta;
        /* border-radius: 1rem; */
    }
</style>
