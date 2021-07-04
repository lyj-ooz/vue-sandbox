<template>
  <div>
    <div v-for="ask in asks" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchAskList } from "../api/index";

@Component
export default class AskView extends Vue {
  public asks = [];

  created() {
    fetchAskList()
      .then((res) => (this.asks = res.data))
      .catch((err) => console.log(err));
  }
}
</script>
