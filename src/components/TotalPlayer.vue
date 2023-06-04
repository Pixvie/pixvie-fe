<template>
  <div class="activePlayer">
    Total player: <span>{{ totalPlayer }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { socket } from "@/socket";
const totalPlayer = ref(0);

onMounted(() => {
  socket.on("TOTAL_PLAYER", (payload) => {
    totalPlayer.value = payload;
  });
});
</script>

<style lang="scss" scoped>
.activePlayer {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 12px;
  background: black;
  opacity: 0.4;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.25s;
  color: white;
  &:hover {
    opacity: 1;
  }
}
</style>
