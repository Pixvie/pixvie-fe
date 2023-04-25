<template>
  <div class="chatBox">
    <div class="chatContainer">
      <div class="chatList">
        <ul></ul>
      </div>
      <div class="chatButtons">
        <input
          v-model="textInput"
          type="text"
          placeholder="Write your message"
        />
        <button @click="sendMessage" class="sendButton">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { socket } from "@/socket";
const store = useStore();
const textInput = ref("");
const chatMessages = ref([]);

const sendMessage = () => {
  const username = store.state.user.username;
  const message = `${username}: ${textInput.value}`;
  textInput.value = "";
  socket.emit("CHAT_MESSAGE", message);
};

onMounted(() => {
  socket.on("SEND_MESSAGE", (data) => {
    chatMessages.value = [...chatMessages.value, data];
  });
});
</script>

<style lang="scss" scoped>
.chatBox {
  position: absolute;
  margin: 12px;
  border-radius: 12px;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 20px 8px rgba($color: #000000, $alpha: 0.4);
  width: 448px;
  height: 300px;
  background-color: #fff;
}

.chatContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  & .chatList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    & ul {
      list-style: none;
      width: 100%;
      & li {
        margin-top: 8px;
        text-align: left;
        word-wrap: break-word;
      }
    }
  }
  & .chatButtons {
    display: flex;
    width: 100%;
    & .sendButton {
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 12px;
      outline: none;
      cursor: pointer;
      font-weight: bold;
    }
    & > input {
      width: 100%;
      border-radius: 8px;
      margin-right: 8px;
      border: 2px solid rgba($color: #000000, $alpha: 0.2);
      outline: none;
      padding: 12px;
    }
  }
}
</style>
