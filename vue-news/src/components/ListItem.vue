<template>
  <div>
    <li v-for="d in listItems" :key="d.id" class="post">
      <span class="point">{{ d.points }}</span>
      <a :href="d.url">
        {{ d.title }}
      </a>
      <small v-if="d.user">
        {{ d.time_ago }} by
        <router-link :to="`/user/${d.user}`">
          {{ d.user }}
        </router-link>
      </small>
      <small v-else>
        {{ d.time_ago }} at
        <a :href="d.url">
          {{ d.domain }}
        </a>
      </small>
    </li>
  </div>
</template>

<script>
export default {
  // props: ["data"],
  computed: {
    listItems() {
      const routeName = this.$route.name;
      if (routeName === "news") {
        return this.$store.state.news;
      } else if (routeName === "ask") {
        return this.$store.state.asks;
      } else if (routeName === "jobs") {
        return this.$store.state.jobs;
      } else {
        return false;
      }
    },
  },
  created() {
    console.log("this is listItem", this.$route.path, this.$route.name);
    const routeName = this.$route.name;
    if (routeName === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (routeName === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (routeName === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
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
