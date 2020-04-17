<template>
  <div class="formAdd p-5 -flex flex-column align-items-center justify-content-center">
    <vue-element-loading :active="isLoading" :is-full-screen="true"/>
      <form @submit.prevent="add">
          <h2 style="color: white;">Add Product</h2><br>
            <input type="text" name="name" id="name" class="form-control" placeholder="name" v-model="productName" required><br>
            <!-- <input type="text" name="urlImage" class="form-control"  id="urlImage" placeholder="image url" v-model="productUrl" required><br> -->
            <input @change="onSelected" class="form-control" type="file" accept="image/*" name="image" id="image"><br>
            <input type="text" name="price" class="form-control"  id="price" placeholder="price" v-model="productPrice" required><br>
            <input type="text" name="stock" class="form-control"  id="stock" placeholder="stock" v-model="productStock" required><br>
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
            <button id="buttonSbt" type="submit" class="form-control btn-light" style="color: magenta;">Submit</button>
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
      productName: '',
      productUrl: '',
      productPrice: '',
      productStock: '',
      productCategory: 'Fruit',
      productImage: null,
      // baseUrl: 'http://localhost:3000',
      imageData: null,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['addProduct', 'getProduct']),
    add () {
      try {
        if (!this.imageData) {
          console.log('haiii semua')
            throw new Error('Image is required')
        } else {
          this.isLoading = true
          this.uploadFile(this.imageData.name, this.imageData)
         
        }
        
      } catch (error) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${error.message}`
        })
      }
    },
    onSelected (event) {
      this.imageData = event.target.files[0]
    },
    uploadFile (pathToName, file) {
      new Promise((resolve, reject) => {
        const task = firebase.storage().ref(pathToName).put(file)
        const taskProgress = snapshot => {}
        const taskError = reject
        const taskCompleted = () => {
          task.snapshot.ref
            .getDownloadURL()
            .then(resolve => {
              console.log(resolve)
              this.productImage = resolve
              const payload = {
                name: this.productName,
                image_url: this.productImage,
                price: +this.productPrice,
                stock: +this.productStock,
                category: this.productCategory
              }
              
              this.addProduct(payload)
              .then((result) => {
                console.log(result, '<<<<<<')
              }).catch((err) => {
                console.log('wawa')
                let errorsMessage = ''
                err.forEach(el => {
                  errorsMessage += el.message + '\n\n'
                })
                this.$swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: `${errorsMessage}`
                })
                console.log(err, '<<<<<<<')
              })
              .finally(() => {
                this.isLoading = false
              });
              this.productName = ''
              this.productPrice = ''
              this.productStock = ''
              this.productCategory = 'Fruit'
            })
            .catch(reject => {
              this.isLoading = false
              console.log(reject)
            })
        }
        task.on('state_changed', taskProgress, taskError, taskCompleted)
      })
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
