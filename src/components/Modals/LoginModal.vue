<template>
  <vue-final-modal
    :click-to-close="false"
    :ssr="false"
    classes="modalWrapper"
    content-class="modalContent"
  >
    <div class="modalContainer">
      <div class="modalContainer--modal-header">
        <h2>Welcome To Pixvie 🧑‍🚒</h2>
      </div>
      <div class="modalContainer--modal-body">
        <div class="modalContainer--modal-body-left">
          <div v-if="loginStatus" class="loginForm">
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="signin" type="button">Login</button>
          </div>
          <div class="registerForm" v-else>
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="signup" type="button">Register</button>
          </div>
          <span
            >{{ loginStatus ? "Not a member yet ?" : "Already a member ?" }}
            <span
              @click="store.commit('changeModalStatus')"
              class="activeSpan"
              >{{ loginStatus ? "Sign up." : "Sign in." }}</span
            ></span
          >
        </div>
        <div class="modalContainer--modal-body-right">Join anonymous</div>
      </div>
      <div class="modalContainer--modal-footer">Pixvie@2023</div>
    </div>
  </vue-final-modal>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
// const emit = defineEmits(["successLogin"]);

const loginStatus = computed(() => store.state.loginModalStatus);
const username = ref("");
const email = ref("");
const password = ref("");

async function signin() {
  //TODO: make validation for username,email,password inputs
  const user = {
    email: email.value,
    password: password.value,
  };
  store.dispatch("signin", user);
}
async function signup() {
  //TODO: make validation for username,email,password inputs

  // create user object
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  store.dispatch("signup", user);
}
</script>

<style lang="scss" scoped>
::v-deep .modalWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modalContent {
  background-color: rgba(255, 255, 255, 1);
  padding: 32px;
  border-radius: 8px;
}

.modalContainer {
  &--modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 32px;
  }

  &--modal-body {
    display: flex;
    padding: 8px;
    &-left {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-right: 12px;
      & .activeSpan {
        color: rgb(0, 153, 255);
        &:hover {
          cursor: pointer;
        }
      }
      & > span {
        font-size: 14px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }

  &--modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    & > input {
      margin-bottom: 12px;
      padding: 14px;
      border-radius: 8px;
      font-size: 14px;
      border: 2px solid rgb(185, 185, 185);
    }
    & > button {
      padding: 14px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
      border: none;
      background-color: rgb(0, 153, 255);
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .registerForm {
    display: flex;
    flex-direction: column;
    & > input {
      margin-bottom: 12px;
      padding: 14px;
      border-radius: 8px;
      font-size: 14px;
      border: 2px solid rgb(185, 185, 185);
    }
    & > button {
      padding: 14px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      margin-bottom: 8px;
      background-color: rgb(57, 197, 57);
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
