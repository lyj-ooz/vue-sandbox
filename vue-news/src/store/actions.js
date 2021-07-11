import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
} from "../api/index";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((res) => {
        context.commit("SET_NEWS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((res) => {
        context.commit("SET_ASK", res.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USERINFO({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data }) => {
        commit("SET_USERINFO", data);
      })
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, itemID) {
    fetchItem(itemID)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((err) => console.log(err));
  },
};
