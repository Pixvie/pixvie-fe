<template>
  <vue-final-modal :click-to-close="false" :ssr="false">
    <div class="modalContainer">
      <div class="modal">
        <h2 class="modal-header">Welcome to Pixvie</h2>
        <div class="modal-body">
          <div class="modal-body-left">
            <div v-if="loginStatus" class="modal-login">
              <h3>Log in</h3>
              <input type="email" v-model="email" placeholder="Email" />
              <input
                type="password"
                v-model="password"
                placeholder="Password"
              />
              <button @click="login" type="submit">Log in</button>
            </div>
            <div v-else class="modal-login">
              <h3>Register</h3>
              <input type="text" v-model="username" placeholder="Username" />
              <input type="email" v-model="email" placeholder="Email" />
              <input
                type="password"
                v-model="password"
                placeholder="Password"
              />
              <button @click="register" type="submit">Sign up</button>
            </div>
            <span>
              <button @click="loginStatus = !loginStatus">
                {{ loginStatus ? "Register" : "Log in" }}
              </button>
            </span>
          </div>
          <div>Join anonymous</div>
        </div>
        <div class="modal-footer">2023@Pixvie</div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["successLogin"]);

const loginStatus = ref(true);
const username = ref("");
const email = ref("");
const password = ref("");

async function login() {
  // make validation for username,email,password inputs

  // create user object
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  // post user object to api
  const res = await fetch("https://pixvie.tech/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  if (res.status === 200) {
    emit("successLogin", { success: true });
  } else {
    console.log(data);
  }
}
async function register() {
  // make validation for username,email,password inputs

  // create user object
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  // post user object to api
  const res = await fetch("https://pixvie.tech/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();

  if (res.status === 201) {
    loginStatus.value = true;
  } else {
    console.log(data);
  }
}
</script>

<style lang="scss" scoped>
// Login Modal
.modalContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.modal {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
.modal-header {
  margin-bottom: 10px;
}
.modal-body {
  margin-bottom: 10px;
  display: flex;
}
.modal-body-left {
  display: flex;
  flex-direction: column;
}
.modal-login {
  display: flex;
  flex-direction: column;
  & > input {
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
}
.modal-footer {
  text-align: right;
}

// Sign Up Modal
.modal-signup {
  display: flex;
  flex-direction: column;
  & > input {
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
}
</style>
