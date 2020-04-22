<template>
  <div class="formEdit p-5 -flex flex-column align-items-center justify-content-center">
    <vue-element-loading :active="isLoading" :is-full-screen="true"/>
      <form @submit.prevent="edit">
          <h2 style="color: white;">Edit Product</h2><br>
            <input type="text" name="name" id="name" class="form-control" placeholder="name" v-model="productName"><br>
            <!-- <input type="text" name="urlImage" class="form-control"  id="urlImage" placeholder="image url" v-model="productUrl"><br> -->
            <input @change="onSelected" class="form-control" type="file" accept="image/*" name="image" id="image"><br>
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
            <button id="btnEdit" type="submit" class="form-control btn-light" style="color: magenta;">Submit</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase'
import VueElementLoading from 'vue-element-loading'

export default {
  components: {
    VueElementLoading
  },
  data () {
    return {
      imageData: null,
      isLoading: false
    }
  },
  computed: {
    getCurrentProd () {
      return this.$store.state.toEditProduct
    },
    productId () {
      return this.getCurrentProd.id
    },
    productName: {
      get () {
        return this.getCurrentProd.name
      },
      set (productName) {
        this.getCurrentProd.name = productName
      }
    },
    productPrice: {
      get () {
        return this.getCurrentProd.price
      },
      set (productPrice) {
        this.getCurrentProd.price = productPrice
      }
    },
    productUrl: {
      get () {
        return this.getCurrentProd.image_url
      },
      set (productUrl) {
        this.getCurrentProd.image_url = productUrl
      }
    },
    productCategory: {
      get () {
        return this.getCurrentProd.category
      },
      set (productCategory) {
        this.getCurrentProd.category = productCategory
      }
    },
    productStock: {
      get () {
        return this.getCurrentProd.stock
      },
      set (productStock) {
        this.getCurrentProd.stock = productStock
      }
    }
  },
  methods: {
    ...mapActions(['editProduct', 'getProduct']),
    onSelected (event) {
      this.imageData = event.target.files[0]
      console.log(this.imageData)
    },
    edit () {
       try {
        if (!this.imageData) {
            const payload = {
                id: this.productId,
                name: this.productName,
                image_url: this.productUrl,
                price: +this.productPrice,
                stock: +this.productStock,
                category: this.productCategory
              }
            this.editProduct(payload)
        } else {
          this.isLoading = true
          this.uploadFile(this.imageData)
        }
        
      } catch (error) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${error.message}`
        })
      }
    },
    uploadFile (file) {
      new Promise((resolve, reject) => {
        const task = firebase.storage().refFromURL(this.productUrl).put(file)
        const taskProgress = snapshot => {}
        const taskError = reject
        const taskCompleted = () => {
          task.snapshot.ref
            .getDownloadURL()
            .then(resolve => {
              console.log(resolve)
              this.productImage = resolve
              const payload = {
                id: this.productId,
                name: this.productName,
                image_url: resolve,
                price: +this.productPrice,
                stock: +this.productStock,
                category: this.productCategory
              }
            this.editProduct(payload)
            .finally(() => {
                this.isLoading = false
            });
            })
            .catch(reject => {
              this.isLoading = false
              console.log(reject)
            })
        }
        task.on('state_changed', taskProgress, taskError, taskCompleted)
      })
    }
  },
  created () {
    return this.getCurrentProd
  }
}
</script>
<style>
.formEdit {
    width: 390px;
    height: 600px;
    background-color: magenta;
    border-radius: 1rem;
}
</style>
