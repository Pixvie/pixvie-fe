<template>
  <div class="container" @click="logout">Profile</div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();

const logout = () => {
  store.dispatch("logout");
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-color: rgb(234, 234, 234);
  border: 2px solid rgb(209, 209, 209);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
}
</style>
