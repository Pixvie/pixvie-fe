<template>
  <div class="chatItem">
    <span class="chatItem--owner">{{ details.owner }}:&nbsp;</span>
    <span class="chatItem--message">{{ details.message }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["messageDetail"]);
const messageParser = (propier) => {
  const [owner, message] = propier.split(":");
  return { owner, message };
};

const details = ref(messageParser(props.messageDetail));
</script>

<style lang="scss" scoped>
.chatItem {
  display: flex;
  width: 100%;
  word-wrap: break-word;
  &--time {
    font-size: 14px;
  }
  &--owner {
    font-weight: bold;
  }
  &--message {
    word-break: break-word;
    font-size: 14px;
  }
}
</style>
