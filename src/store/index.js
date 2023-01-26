import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {
      username: null,
      id: null,
      logged: false,
    },
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    signin(state, payload) {
      state.user.logged = true;
      state.user.username = payload.username;
      state.user.id = payload.id;
    },
  },
  actions: {
    async signin({ commit }, user) {
      const { data, status } = await axios.post(
        "https://pixvie.tech/api/auth/signin",
        user
      );
      if (status === 200) {
        commit("signin", data);
      } else {
        //TODO: handle error
      }
    },
    async checkSession({ commit }) {
      const { data, status } = await axios.get(
        "https://pixvie.tech/api/auth/profile"
      );
      if (status === 200) {
        commit("signin", data);
      }
    },
  },
  modules: {},
});
