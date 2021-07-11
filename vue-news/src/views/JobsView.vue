<template>
  <div>
    <h1>jobs</h1>

    <ul class="jobs-list">
      <!-- <list-item :data="jobs"></list-item> -->
      <list-item></list-item>
    </ul>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index";
import ListItem from "../components/ListItem.vue";
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
  },
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then((res) => {
    //     this.jobs = res.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
/*
.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  border-bottom: 1px solid #eee;
}
.point {
  color: #42b883;
} */
</style>
