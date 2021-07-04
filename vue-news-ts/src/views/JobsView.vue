<template>
  <div>
    <div v-for="job in jobs" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchJobsList } from "../api/index";

@Component
export default class JobsView extends Vue {
  public jobs = [];

  created(): void {
    fetchJobsList()
      .then((res) => {
        this.jobs = res.data;
      })
      .catch((err) => console.log(err));
  }
}
</script>
