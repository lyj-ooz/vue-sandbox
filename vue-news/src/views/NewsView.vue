<template>
  <div>
    <h1>news view</h1>
    <div v-for="n in news" :key="n.id">
      <div>{{ n.title }}</div>
      <div>{{ n.url }}</div>
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => {
        this.news = res.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
