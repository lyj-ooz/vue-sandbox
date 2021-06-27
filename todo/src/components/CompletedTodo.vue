<template>
  <div class="w-9/12 mx-auto text-left my-1">
    <small> completed: {{ numOfCompletedTodo }} / {{ numOfTodo }} </small>
  </div>
</template>

<script>
export default {
  // props: {
  //   todos: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    numOfCompletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    },
    numOfTodo() {
      return this.todos.length;
    },
  },
};
</script>

<style></style>
