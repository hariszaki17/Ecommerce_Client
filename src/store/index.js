import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    toEditProduct: {},
    baseUrl: 'https://intense-refuge-03921.herokuapp.com'
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
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: this.state.baseUrl + '/products',
          headers: {
            access_token: localStorage.access_token
          },
          data: payload
        })
          .then((result) => {
            resolve(result)
            context.dispatch('getProduct')
            router.push('/home/dashboard')
          }).catch((err) => {
            reject(err.response.data.errors)
            console.log(err.response)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
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
            resolve(result)
            context.dispatch('getProduct')
            router.push('/home/dashboard')
          }).catch((err) => {
            reject(err)
            console.log(err)
          })
      })
    },
    getProduct (context, tag) {
      const categorySrc = tag || ''
      console.log(tag)
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: this.state.baseUrl + '/products?category=' + categorySrc,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then((result) => {
            resolve(result)
            console.log(result.data.products)
            context.commit('GET_PRODUCTS', result.data.products)
          }).catch((err) => {
            reject(err)
            console.log(err)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: this.state.baseUrl + `/products/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then((result) => {
            resolve({
              result
            })
            context.dispatch('getProduct')
          }).catch((err) => {
            reject({
              errors: err
            })
            console.log(err)
          })
      })
    }
  },
  modules: {
  }
})
