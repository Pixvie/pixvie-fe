<template>
  <div class="container">
    <div
      class="colorBox"
      v-for="(item, index) in colorList"
      @click="changeColor"
      :id="index"
      :key="index"
      :style="{ 'background-color': item }"
    ></div>
    <div
      class="color-picker"
      :style="{
        'background-color': store.state.activeColor,
      }"
    >
      <input
        class="color-picker"
        value="#00ffd5"
        type="color"
        @change="changeColorPicker"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const colorList = ref([
  "#000",
  "#fff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
]);

const changeColorPicker = (e) => {
  store.commit("changeActiveColor", e.target.value);
};

const changeColor = (e) => {
  store.commit("changeActiveColor", colorList.value[e.target.id]);
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-color: rgb(209, 209, 209);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  bottom: 12px;
  left: calc(50% - 190px);
  height: 64px;
  border-radius: 64px;
  border: 2px solid rgb(209, 209, 209);
  &:hover {
    cursor: pointer;
  }
}
.colorBox {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: #000;
  border: 2px solid white;
}

.color-picker {
  width: 64px;
  height: 32px;
  border-radius: 64px;
  background-color: red;
  border: 2px solid white;
  margin: 0 4px;
  &:hover {
    cursor: pointer;
  }
}
input[type="color"] {
  opacity: 0;
}
</style>
