import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

// index.js 라서 생략가능
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
