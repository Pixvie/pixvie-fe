<template>
  <div id="home">
    <Logo />
    <Canvas />
    <Profile v-if="store.state.user.logged" />
    <Colorpicker />
  </div>
</template>

<script setup>
import Canvas from "@/components/Canvas.vue";
import Logo from "@/components/Logo.vue";
import Profile from "@/components/Profile.vue";
import Colorpicker from "@/components/Colorpicker.vue";

import { onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.dispatch("checkSession");
});
</script>
