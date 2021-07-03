<template>
  <nav>
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class NavBar extends Vue {}
</script>

<style scoped>
nav {
  background-color: #42b883;
  padding: 0.7rem;
}

nav a {
  color: #fff;
}

nav .router-link-active {
  color: #8a2be2;
}
</style>
