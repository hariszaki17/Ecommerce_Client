import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: 'AIzaSyBC88y8hbfyjrIisP8PwVV-d6TcdpYo0rQ',
  authDomain: 'storagetest-6ef69.firebaseapp.com',
  databaseURL: 'https://storagetest-6ef69.firebaseio.com',
  projectId: 'storagetest-6ef69',
  storageBucket: 'storagetest-6ef69.appspot.com',
  messagingSenderId: '587541825515',
  appId: '1:587541825515:web:68ce0a802aaa98d97ebbae'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
