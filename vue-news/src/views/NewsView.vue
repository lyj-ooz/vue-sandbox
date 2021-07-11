<template>
  <div>
    <h1>news view</h1>
    <ul class="news-list">
      <!-- <list-item :data="news"></list-item> -->
      <list-item></list-item>
    </ul>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index";
import ListItem from "../components/ListItem.vue";
export default {
  // data() {
  //   return {
  //     news: [],
  //   };
  // },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //   .then((res) => {
    //     this.news = res.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style scoped></style>
