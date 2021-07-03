<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "./components/NavBar.vue";

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
  public message = "메세지~~";

  public changeMsg(): void {
    this.message = "new 메세지~~~~~~~";
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
