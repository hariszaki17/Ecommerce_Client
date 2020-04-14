<template>
  <div class="mainPanel d-flex flex-column align-items-center">
    <div class="title-cat d-flex align-items-center justify-content-center"><h2 style="color: magenta;">Category</h2></div>
    <div class="cont-cat">
      <div class="category btn-primary d-flex align-items-center justify-content-center">All</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Fruits</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Clothes</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Cars</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Gadgets</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Tools</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Buildings</div>
      <div class="category btn-primary d-flex align-items-center justify-content-center">Health</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'mainPanel',
    components: {
    }
}
</script>

<style>
.title-cat {
  width: 100%;
  height: 10%;
}
.category {
  width: 95%;
  height: 100px;
  background-color: magenta;
  border-radius: 1rem;
  margin: 5px;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
-moz-box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
box-shadow: 3px 3px 6px 0px rgba(219,219,219,1);
}
.cont-cat {
  width: 100%;
  height: 100%;
  overflow: scroll;
}::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
.mainPanel {
    width: 20%;
    height: 100%;
    /* margin: 6px; */
    /* border-radius: 1rem; */
    /* background-color: yellow; */
}
</style>