<template>
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #cd45fa;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}
</style>
