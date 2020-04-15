import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    message: 'hai',
    toEditProduct: {},
    baseUrl: 'http://localhost:3000'
  },
  mutations: {
    GET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_EDITPRODUCT (state, payload) {
      state.toEditProduct = payload
    }
  },
  actions: {
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: this.state.baseUrl + '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then((result) => {
          console.log(result)
          context.dispatch('getProduct')
        }).catch((err) => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'PATCH',
        url: this.state.baseUrl + `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then((result) => {
          console.log(result)
          context.dispatch('getProduct')
        }).catch((err) => {
          console.log(err)
        })
    },
    getProduct (context, tag) {
      const categorySrc = tag || ''
      console.log(tag)
      axios({
        method: 'GET',
        url: this.state.baseUrl + '/products?category=' + categorySrc,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          console.log(result.data.products)
          context.commit('GET_PRODUCTS', result.data.products)
        }).catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: this.state.baseUrl + `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          console.log(result.data.products)
          context.dispatch('getProduct')
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
