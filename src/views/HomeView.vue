<template>
  <div id="home">
    <Logo />
    <Canvas />
  </div>
</template>

<script setup>
import Canvas from "@/components/Canvas.vue";
import Logo from "@/components/Logo.vue";
import { onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.dispatch("checkSession");
});
</script>
