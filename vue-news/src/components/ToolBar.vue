<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: #fff;
  background-color: #42b883;
  padding: 0.5rem;
}
.header .router-link-exact-active {
  color: blue;
}
.header a {
  color: #fff;
}
</style>
