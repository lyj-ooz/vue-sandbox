<template>
  <div>
    <!-- <p>{{ userInfo.id }}</p> -->
    <slot name="userID">
      <!-- 상위 컴포넌트에서 정의할 부분 -->
    </slot>
    <!-- <p>{{ userInfo.about }}</p> -->
    <slot name="about">
      <!-- 상위 컴포넌트에서 정의할 부분 -->
    </slot>
    <!-- <p>{{ userInfo.karma }}</p> -->
    <slot name="karma">
      <!-- 상위 컴포넌트에서 정의할 부분 -->
    </slot>
  </div>
</template>

<script>
export default {
  // computed: {
  // vuex의 store에 데이터를 저장했기 때문에 어느 컴포넌트에서든지 데이터를 바로 가져올 수 있다. (prop으로 받는 것 말고도!)
  // userInfo() {
  //   return this.$store.state.userInfo;
  // },
  // },
  props: ["userInfo"],
};
</script>

<style></style>
