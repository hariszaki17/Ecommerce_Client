<template>
  <div class="dashboard d-flex align-items-center justify-content-center">
      <board></board>
  </div>
</template>

<script>
import board from '../components/dbBoard'
export default {
    components: {
        board
    },
    created () {
        if (!localStorage.access_token) {
        this.$router.push('/')
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
