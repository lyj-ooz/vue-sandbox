<template>
  <div>
    <div v-for="item in news" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchNewsList } from "../api/index";

@Component
export default class NewsView extends Vue {
  public news = [];
  created(): void {
    fetchNewsList()
      .then((res) => {
        this.news = res.data;
      })
      .catch((err) => console.log(err));
  }
}
</script>
