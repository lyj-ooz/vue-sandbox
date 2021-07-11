<template>
  <div>
    <h1>ask</h1>

    <ul class="asks-list">
      <!-- <li v-for="ask in asks" :key="ask.id" class="post">
        <span class="point">{{ ask.points }}</span>
        <router-link :to="ask.url">
          {{ ask.title }}
        </router-link>
        <small>
          {{ ask.time_ago }} by
          <router-link :to="`/user/${ask.user}`">
            {{ ask.user }}
          </router-link>
        </small>
      </li> -->
      <!-- <list-item :data="asks"></list-item> -->
      <list-item></list-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

// import { fetchAskList } from "../api/index";
export default {
  // data() {
  //   return {
  //     asks: [],
  //   };
  // },
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      asks: "getAsks",
    }),
    // 또는 아래처럼 사용할 수 있음
    // ...mapGetters(["getAsks"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // fetchAskList()
    //   .then((res) => {
    //     this.asks = res.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  border-bottom: 1px solid #eee;
}
.point {
  color: #42b883;
}
</style>
