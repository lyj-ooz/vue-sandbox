<template>
  <user-profile :userInfo="userInfo">
    <div slot="userID">{{ userInfo.id }}</div>
    <div slot="about" v-if="userInfo.about">{{ userInfo.about }}</div>
    <div slot="karma">{{ userInfo.karma }}</div>
  </user-profile>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  components: {
    UserProfile,
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", username);
  },
};
</script>

<style></style>
