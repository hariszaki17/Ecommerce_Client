<template>
  <div class="formAdd">
      <form @submit.prevent="">
            <input type="text" name="email" id="email" class="form-control" placeholder="email" v-model="emailInput"> <br>
            <input type="password" name="password" class="form-control"  id="password" placeholder="password" v-model="passwordInput"><br>
            <button id="buttonSubmit" type="submit" class="form-control" style="color: white;">Login</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>