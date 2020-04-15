<template>
  <div class="addPage bg-light d-flex justify-content-center align-items-center">
      <addForm></addForm>
  </div>
</template>

<script>
import addForm from '../components/addForm'
export default {
  name: 'addPage',
  components: {
    addForm
  }
}
</script>

<style>
.addPage {
    width: 95vw;
    /* background-color: white; */
    height: 100%;
    border-radius: 0 1rem 1rem 0;
}
</style>
