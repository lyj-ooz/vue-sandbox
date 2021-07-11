import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
    item: {},
  },
  getters: {
    getAsks(state) {
      return state.asks;
    },
  },
  mutations: mutations,
  actions: actions,
});
