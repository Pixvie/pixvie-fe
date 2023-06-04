import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { vfmPlugin } from "vue-final-modal";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(vfmPlugin)
  .use(Vue3Toasity, { autoClose: 3000 })
  .mount("#app");
