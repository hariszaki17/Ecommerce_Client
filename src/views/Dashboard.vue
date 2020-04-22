<template>
  <div class="dashboard d-flex align-items-center justify-content-center">
      <vue-element-loading :active="isLoading" :is-full-screen="true"/>
      <board></board>
  </div>
</template>

<script>
import board from '../components/dbBoard'
import VueElementLoading from 'vue-element-loading'

export default {
  components: {
    board,
    VueElementLoading
  },
  data () {
    return {
      isLoading: true

    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/')
    } else {
      // this.$router.push('home')
      this.$swal.fire({
        icon: 'success',
        title: 'You are logged in successfully',
        showConfirmButton: false,
        timer: 1500

      })
      this.isLoading = true
      this.$store.dispatch('getProduct')
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style>
.dashboard {
        width: 100vw;
        height: 100vh;
        background-color: magenta;
        /* border-radius: 1rem; */
    }
</style>
