<template>
  <div class="navButton p-1 mt-2 d-flex flex-column align-items-center justify-content-start">
      <router-link to="/home"><button class="btnNav form-control btn-success mb-1">H</button></router-link>
      <router-link to="/home/dashboard"><button class="btnNav form-control btn-warning mb-1">D</button></router-link>
      <router-link to="/home/addProduct"><button class="btnNav form-control btn-primary">A</button></router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.navButton {
    width: 55px;
    height: 50%;
}

.btnNav {
    width: 45px;
    height: 45px;
    border-radius: 1rem;
}
</style>
