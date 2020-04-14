<template>
  <div class="sidePanel">
    <div class="row p-5">
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
      <productCard></productCard>
    </div>
  </div>
</template>

<script>
import productCard from '../components/productCard'
export default {
    name: "sidePanel",
    components: {
      productCard
    }
}
</script>

<style>
.sidePanel {
    width: 78%;
    border-radius: 1rem;
    height: 95%;
    background-color: magenta;
    overflow: scroll;
    /* background-color: yellow; */
    /* border: black solid 2px; */
}
</style>