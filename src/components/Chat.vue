<template>
  <div class="chatBox">
    <div class="chatContainer">
      <div class="chatList">
        <ul>
          <li v-for="(message, index) in chatMessages" :key="index">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="chatButtons">
        <input
          v-model="textInput"
          type="text"
          placeholder="Write your message"
          @keyup.enter="sendMessage"
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

const gotoEndOfChat = () => {
  const chatList = document.querySelector(".chatList");
  chatList.scrollTop = chatList.scrollHeight;
};

const sendMessage = () => {
  const message = `${textInput.value}`;
  const payload = { user: store.state.user, message };
  textInput.value = "";
  socket.emit("CHAT_MESSAGE", payload);
  gotoEndOfChat();
};

onMounted(() => {
  socket.on("CLEAR_CHAT", () => {
    chatMessages.value = [];
  });

  socket.on("WARN", (payload) => {
    const { username, message } = payload;
    const initPayload = { status: "CHAT_WARN", message };
    if (store.state.user.username === username) {
      socket.emit("HANDLE_MODERATION", initPayload);
    }
  });

  socket.on("FORCE_DISCONNECT", (payload) => {
    const username = payload;
    const initPayload = { status: "SELF_DISCONNECT" };
    if (store.state.user.username === username) {
      socket.emit("HANDLE_MODERATION", initPayload);
    }
  });

  socket.on("SEND_MESSAGE", (data) => {
    chatMessages.value = [...chatMessages.value, data];
  });
});
</script>

<style lang="scss" scoped>
.chatBox {
  position: absolute;
  opacity: 0.4;
  margin: 12px;
  border-radius: 12px;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 20px 8px rgba($color: #000000, $alpha: 0.4);
  width: 448px;
  height: 300px;
  transition: all 0.25s;
  background-color: #fff;
  &:hover {
    opacity: 1;
  }
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
    margin-top: 10px;
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
