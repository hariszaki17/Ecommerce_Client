<template>
  <div class="sidePanel">
    <div class="row p-5">
      <productCard v-for="product in products" :key="product.id"></productCard>
    </div>
  </div>
</template>

<script>
import productCard from '../components/productCard'
export default {
  name: 'sidePanel',
  components: {
    productCard
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  created() {
    console.log(this.products)
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
}
</style>
