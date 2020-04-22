<template>
  <div class="m-1">
    <div class="card pt-4" style="width: 18rem; height: 24rem">
      <div id="img" :style="this.urlData"></div>
  <div class="card-body d-flex flex-column align-items-center">
    <h5 class="card-title">{{name}}</h5>
    <div class="d-flex flex-row flex-wrap justify-content-between mb-2 mt-2" style="width: 16rem;">
      <p class="card-text">Price: {{price}}</p>
      <p class="card-text">Stock: {{stock}}</p>
      <p class="card-text">Category: {{category}}</p>
    </div>
    <div class="d-flex justify-content-end" style="width: 100%;">
      <div @click.prevent="edit" class="m-1"><router-link :to="{ name: 'editPage', params: { id: this.id } }" tag="button" class="btn-primary form-control m-1">Edit</router-link></div>
      <div @click.prevent="deleteProd" class="m-1"><button class="btn-danger form-control m-1">Delete</button></div>
      <!-- <div class="m-1"><router-link to="/home" tag="button" class="btn-danger form-control m-1">Delete</router-link></div>
       -->
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'productCard',
  props: ['id', 'name', 'image_url', 'price', 'stock', 'category'],
  methods: {
    ...mapMutations(['SET_EDITPRODUCT']),
    ...mapActions(['deleteProduct']),
    edit () {
      this.SET_EDITPRODUCT(this.currentProd)
    },
    deleteProd () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.deleteProduct(this.id)
            .then(result => {
              firebase.storage().refFromURL(this.image_url).delete()
              this.$swal.fire(
                'Deleted!',
              `${result.result.data.message}`,
              'success'
              )
            })
            .catch(err => {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
            })
        }
      })
    }
  },
  computed: {
    urlData () {
      return `background-image: url("${this.image_url}");`
    },
    currentProd () {
      return {
        id: this.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      }
    }
  },
  created () {
    // console.log(this.currentProd)
  }
}
</script>

<style>
#img {
  width: 17rem;
  height: 180px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
