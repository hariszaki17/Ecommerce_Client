<template>
  <div class="dbPage d-flex justify-content-center align-items-center">
      <mainPanel></mainPanel>
      <sidePanel></sidePanel>
  </div>
</template>

<script>
import mainPanel from '../components/mainPanel'
import sidePanel from '../components/sidePanel'
export default {
  name: 'dbPage',
  components: {
    mainPanel,
    sidePanel
  }
}
</script>

<style>
.dbPage {
    /* position: static; */
    width: 95vw;
    /* background-color: red; */
    height: 100%;
    border-radius: 0 1rem 1rem 0;
}
</style>
