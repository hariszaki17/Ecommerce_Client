import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Dashboard.vue'
import landingPage from '../views/landingPage.vue'
import dashboardPage from '../views/dashboardPage.vue'
import addPage from '../views/addBoard.vue'
import editPage from '../views/editBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Dashboard',
    component: Home,
    children: [
      {
        path: '',
        component: landingPage
      },
      {
        path: 'dashboard',
        component: dashboardPage
      },
      {
        path: 'addProduct',
        component: addPage
      },
      {
        path: 'edit/:id',
        name: 'editPage',
        component: editPage
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
