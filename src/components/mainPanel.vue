<template>
  <div class="mainPanel d-flex flex-column align-items-center">
    <vue-element-loading :active="isLoading" :is-full-screen="true"/>
    <div class="title-cat d-flex align-items-center justify-content-center"><h2 style="color: magenta;">Category</h2></div>
    <div class="cont-cat">
      <div @click.prevent="searchCat()" class="category btn-primary d-flex align-items-center justify-content-center">All</div>
      <div @click.prevent="searchCat('Fruit')" class="category btn-primary d-flex align-items-center justify-content-center">Fruit</div>
      <div @click.prevent="searchCat('Vegetable')" class="category btn-primary d-flex align-items-center justify-content-center">Vegetable</div>
      <div @click.prevent="searchCat('Herb')" class="category btn-primary d-flex align-items-center justify-content-center">Herb</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'mainPanel',
  components: {
    VueElementLoading
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['getProduct']),
    searchCat (tag) {
      console.log(tag)
      this.isLoading = true
      this.getProduct(tag)
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style>
.title-cat {
  width: 100%;
  height: 10%;
}
.category {
  width: 95%;
  height: 100px;
  background-color: magenta;
  border-radius: 1rem;
  margin: 5px;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
-moz-box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
}
.cont-cat {
  width: 100%;
  height: 100%;
  overflow: scroll;
}::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
.mainPanel {
    width: 20%;
    height: 100%;
    /* margin: 6px; */
    /* border-radius: 1rem; */
    /* background-color: yellow; */
}
</style>
