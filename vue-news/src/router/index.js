import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode: 'history': url의 #을 없앰
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // url 주소
      path: "/news",
      name: "news",
      // 위 path에 보여줄 컴포넌트(=페이지)
      component: NewsView,
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/item",
      component: ItemView,
      // props: (route) => ({ query: route.query.id }),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});
