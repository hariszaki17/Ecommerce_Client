import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    products: [],
    message: 'hai',
    baseUrl: 'http://localhost:3000'
  },
  mutations: {
    addProduct (state, payload) {
      axios({
        method: 'POST',
        url: state.baseUrl + '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then((result) => {
          console.log(result)
        }).catch((err) => {
          console.log(err)
        })
    },
    GET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    addProduct (context, payload) {
      context.commit('addProduct', payload)
    },
    getProduct (context) {
      axios({
        method: 'GET',
        url: this.state.baseUrl + '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          // console.log(result.data.products)
          
          context.commit('GET_PRODUCTS', result.data.products)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
