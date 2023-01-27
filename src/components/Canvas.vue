<template>
  <canvas id="canvas" width="2000" height="2000"></canvas>
  <div
    class="container"
    id="container"
    @mousedown="getCoords"
    @mouseup="drawPixel(x, y, '#000')"
  >
    <img
      src="../assets/selected-pixel.svg"
      alt="selected-pixel"
      class="selected-item-img"
    />
  </div>
  <LoginModal v-model="showModal"></LoginModal>
</template>

<script setup>
import LoginModal from "@/components/Modals/LoginModal.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import panzoom from "panzoom";
import io from "socket.io-client";

const store = useStore();
const showModal = computed(() => !store.state.user.logged);
const socket = ref(null);
onMounted(() => {
  socket.value = io("https://pixvie.tech", {
    path: "/api/socket.io/",
    rejectUnauthorized: false,
  }); //
  socket.value.on("DRAWED_PIXEL", ({ x, y, color }) => {
    drawPixel(x, y, color, false);
  });
});

onMounted(async () => {
  const el = document.querySelector("#canvas");
  panzoom(el, {
    maxZoom: 3,
    minZoom: 0.8,
    smoothScroll: true,
    bounds: true,
    boundsPadding: 0.1,
    zoomDoubleClickSpeed: 1,
    zoomSpeed: 0.1,
  });

  const el2 = document.querySelector("#container");
  panzoom(el2, {
    maxZoom: 3,
    minZoom: 0.8,
    smoothScroll: true,
    bounds: true,
    boundsPadding: 0.1,
    zoomDoubleClickSpeed: 1,
    zoomSpeed: 0.1,
  });

  const data = await fetch(`${process.env.VUE_APP_API_SERVER}/board`).then(
    (res) => res.json()
  );

  for (let i = 0; i < 2000; i += 10) {
    for (let j = 0; j < 2000; j += 10) {
      drawPixel(i, j, "#fff", false);
    }
  }

  for (let i = 0; i < data.length; i++) {
    drawPixel(data[i].pos[0], data[i].pos[1], data[i].color, false);
  }
});

let x,
  y = 0;

function getCoords(e) {
  x = e.offsetX;
  y = e.offsetY;
  x = Math.round((x - 10) / 10) * 10;
  y = Math.round((y - 10) / 10) * 10;
  // var coors = "Coordinates: (" + x + "," + y + ")";
  // console.log(coors);
  makeItActive(x, y);
}
// Draw a pixel on canvas
async function drawPixel(x, y, color, flag = true) {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(x, y, 10, 10);

  ctx.fillStyle = color;
  ctx.fillRect(x, y, 9, 9);
  if (flag) socket.value.emit("DRAW_PIXEL", { x, y, color });
}

function makeItActive(x, y) {
  const selectedPixelImg = document.querySelector(".selected-item-img");
  const ctx = document.getElementById("canvas").getContext("2d");
  var fillImagePattern = ctx.createPattern(selectedPixelImg, "repeat");
  ctx.fillStyle = fillImagePattern;
  ctx.fillRect(x, y, 10, 10);
  ctx.fill();
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 2000px;
  height: 2000px;
}

#canvas {
  border: 3px solid rgb(197, 197, 197);
  background-color: rgb(197, 197, 197);
}

img {
  display: none;
}
</style>
