<template>
  <div class="formAdd p-5 -flex flex-column align-items-center justify-content-center">
      <form @submit.prevent="add">
          <h2 style="color: white;">Add Product</h2><br>
            <input type="text" name="name" id="name" class="form-control" placeholder="name" v-model="productName"><br>
            <input type="text" name="urlImage" class="form-control"  id="urlImage" placeholder="image url" v-model="productUrl"><br>
            <input type="text" name="price" class="form-control"  id="price" placeholder="price" v-model="productPrice"><br>
            <input type="text" name="stock" class="form-control"  id="stock" placeholder="stock" v-model="productStock"><br>
            <select name="category" id="category" class="form-control" v-model="productCategory">
                <option value="Fruit">Fruit</option>
                <option value="Apparel">Apparel</option>
                <option value="Automotive">Automotive</option>
                <option value="Gadget">Gadget</option>
                <option value="Tool">Tool</option>
                <option value="Building">Building</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select><br><br><br>
            <button id="buttonSbt" type="submit" class="form-control btn-light" style="color: magenta;">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productName: '',
      productUrl: '',
      productPrice: '',
      productStock: '',
      productCategory: '',
      baseUrl: 'http://localhost:3000'
    }
  },
  methods: {
    add () {
      const payload = {
        name: this.productName,
        image_url: this.productUrl,
        price: +this.productPrice,
        stock: +this.productStock
      }
      this.$store.dispatch('addProduct', payload)
      this.productName = ''
      this.productUrl = ''
      this.productPrice = ''
      this.productStock = ''
      this.productCategory = 'Fruit'
    }
  }
}
</script>
<style>
.formAdd {
    width: 390px;
    height: 600px;
    background-color: magenta;
    border-radius: 1rem;
}
</style>
