import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView.vue";
import JobsView from "@/views/JobsView.vue";
import AskView from "@/views/AskView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   redirect: "/news",
    // },
    { path: "/news", component: NewsView },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
  ],
});
