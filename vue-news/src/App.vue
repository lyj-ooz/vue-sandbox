<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- 아래 router-view 부분에 url에 따라 NewsView, JobsView가 보이게 됨 -->
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
