<template>
  <div>
    <section>
      <div>
        <div>
          User
        </div>
        <div>
          <!-- <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          <div>{{ item.time_ago }}</div> -->
          <user-profile :userInfo="item">
            <router-link slot="userID" :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </user-profile>
        </div>
        <h2>{{ item.title }}</h2>
        <span>{{ item.time_ago }}</span>
      </div>
    </section>
    <!-- ask 본문 -->
    <section>
      <div v-html="item.content">
        {{ item.content }}
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  components: {
    UserProfile,
  },
  created() {
    const itemID = this.$route.query.id;
    this.$store.dispatch("FETCH_ITEM", itemID);
  },
};
</script>

<style></style>
