<template>
  <div class="container"></div>
</template>

<script setup>
import panzoom from "panzoom";
import { onMounted } from "vue";

onMounted(() => {
  const el = document.querySelector(".container");
  panzoom(el, {
    maxZoom: 2,
    minZoom: 0.2,
    smoothScroll: true,
    bounds: true,
    boundsPadding: 0.1,
    zoomDoubleClickSpeed: 1,
  });
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
}

.container {
  background-color: #2c3e50;
  width: 2000px;
  height: 2000px;
}
</style>
