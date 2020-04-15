<template>
  <div class="sideBar d-flex flex-column align-items-center justify-content-between">
      <navButton></navButton>
      <logoutBtn></logoutBtn>
  </div>
</template>

<script>
import logoutBtn from '../components/logoutBtn'
import navButton from '../components/navButton'
export default {
  name: 'sideBar',
  components: {
    logoutBtn,
    navButton
  }
}
</script>

<style>
.sideBar {
    width: 70px;
    height: 100%;
    /* padding-left: 20px;
    margin-right: 5px; */
    /* border-right: magenta solid 2px; */
    /* margin: 1px 2px 1px 4px; */
    /* border-radius: 1rem; */
    /* background-color: magenta; */
}
</style>
