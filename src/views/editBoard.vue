<template>
  <div class="editPage bg-light d-flex justify-content-center align-items-center">
      <editForm></editForm>
  </div>
</template>

<script>
import editForm from '../components/editForm'
export default {
  name: 'editPage',
  components: {
    editForm
  }
}
</script>

<style>
.editPage {
    width: 95vw;
    /* background-color: white; */
    height: 100%;
    border-radius: 0 1rem 1rem 0;
}
</style>
