<template>
  <button @click.prevent="logout" id="btn-logout" class="btn-danger form-control m-2"><i class='fas fa-power-off'></i></button>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>
#btn-logout {
    width: 45px;
    height: 45px;
    border-radius: 1rem;
}
</style>
