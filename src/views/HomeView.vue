<template>
  <div id="home">
    <Logo />
    <Canvas />
    <Profile v-if="store.state.user.logged" />
    <Chat />
    <TotalPlayer />
    <Colorpicker />
  </div>
</template>

<script setup>
import Canvas from "@/components/Canvas.vue";
import Logo from "@/components/Logo.vue";
import Profile from "@/components/Profile.vue";
import Colorpicker from "@/components/Colorpicker.vue";
import Chat from "@/components/Chat.vue";
import TotalPlayer from "@/components/TotalPlayer.vue";

import { onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.dispatch("checkSession");
});
</script>
