<template>
  <div class="board bg-light d-flex flex-row justify-content-center align-items-center">
        <sideBar></sideBar>
        <router-view/>
  </div>
</template>

<script>
import sideBar from '../components/sideBar'
export default {
  components: {
    sideBar
  },
  name: 'board'
}
</script>

<style>
.board {
    width: 98vw;
    height: 95vh;
    border-radius: 1rem;
    /* -webkit-box-shadow: 5px 5px 12px 0px rgba(143,143,143,1);
    -moz-box-shadow: 5px 5px 12px 0px rgba(143,143,143,1);
    box-shadow: 5px 5px 12px 0px rgba(143,143,143,1); */
}
</style>
