<template>
  <div class="navButton p-1 mt-2 d-flex flex-column align-items-center justify-content-start">
      <router-link to="/home" tag='button' class="btnNav form-control btn-success m-1"><i class='fas fa-home'></i></router-link>
      <router-link to="/home/dashboard" tag='button' class="btnNav form-control btn-warning m-1"><i class='fas fa-list-alt'></i></router-link>
      <router-link to="/home/addProduct" tag='button' class="btnNav form-control btn-primary m-1"><i class='fas fa-plus'></i></router-link>

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
