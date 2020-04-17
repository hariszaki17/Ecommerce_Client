<template>
  <div id="container-form-login" class="d-flex flex-column align-items-center justify-content-center">
      <div class="mb-2">
          <h1 style="color: white;">Account Login</h1>
      </div>
      <div class="bg-light p-5" style="border-radius: 15px;">
          <form @submit.prevent="login">
              <input type="text" name="email" id="email" class="form-control" placeholder="email" v-model="emailInput"> <br>
              <input type="password" name="password" class="form-control"  id="password" placeholder="password" v-model="passwordInput"><br>
              <button id="buttonSubmit" type="submit" class="form-control" style="color: white;">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex' 
export default {
  name: 'formLogin',
  data () {
    return {
      emailInput: '',
      passwordInput: ''
    }
  },
  computed: {
    ...mapState(['baseUrl'])
  },
  methods: {
    login () {
      console.log(this.emailInput, this.passwordInput)
      axios({
        method: 'POST',
        url: this.baseUrl + '/users/login',
        data: {
          email: this.emailInput,
          password: this.passwordInput
        }
      })
        .then((result) => {
          localStorage.setItem('access_token', result.data.token)
          this.$router.push('home')
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `${err.response.data.errors[0].message}`
          })
        })
    }
  }
}
</script>

<style>
#container-form-login {
    width: 390px;
    height: 500px;
}

#buttonSubmit {
    background-color: magenta;
}
</style>
