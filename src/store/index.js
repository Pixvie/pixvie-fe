import { createStore } from "vuex";
import { toast } from "vue3-toastify";
import axios from "axios";

export default createStore({
  state: {
    user: {
      username: null,
      id: null,
      logged: false,
    },
    loginModalStatus: true,
  },
  getters: {
    user: (state) => state.user,
    loginModalStatus: (state) => state.loginModalStatus,
  },
  mutations: {
    signin(state, payload) {
      state.user.logged = true;
      state.user.username = payload.username;
      state.user.id = payload.id;
    },
    changeModalStatus(state) {
      state.loginModalStatus = !state.loginModalStatus;
    },
  },
  actions: {
    async signin({ commit }, user) {
      try {
        const { data, status } = await axios.post(
          "https://pixvie.tech/api/auth/signin",
          user
        );
        if (status === 200) {
          toast.success("Successfully logged in!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          commit("signin", data);
        }
      } catch (err) {
        toast.error(err.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    async signup({ commit }, user) {
      try {
        const { status } = await axios.post(
          "https://pixvie.tech/api/auth/signup",
          user
        );
        if (status === 201) {
          toast.success("Successfully signed up!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          commit("changeModalStatus");
        }
      } catch (err) {
        toast.error(err.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    async checkSession({ commit }) {
      try {
        const { data, status } = await axios.get(
          "https://pixvie.tech/api/auth/profile"
        );
        if (status === 200) {
          commit("signin", data);
        }
      } catch (error) {
        toast.warn(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
  },
  modules: {},
});
