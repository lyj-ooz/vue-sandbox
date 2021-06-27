<template>
  <div
    id="app"
    class="container mx-auto my-16 box-border max-w-screen-md px-8 text-center"
  >
    <h1
      class="text-7xl lg:text-9xl font-medium text-purple-600 text-opacity-60"
    >
      Todos
    </h1>
    <input
      v-model="todoText"
      type="text"
      class="border border-solid border-purple-300 w-9/12 my-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      @keyup.enter="addTodo"
    />
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    <CompletedTodo v-show="todos.length > 0 ? true : false" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";
export default {
  name: "App",
  components: {
    Todo,
    CompletedTodo,
  },
  data() {
    return {
      todoText: "",
      // todos: [],
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo(e) {
      if (e.target.value.trim() === "") return;
      // const todo = {
      //   id: Date.now(),
      //   text: e.target.value,
      //   checked: false,
      // };
      // this.todos.push(todo);

      this.$store.commit("ADD_TODO", e.target.value);
      this.todoText = "";
    },
    // toggleCheckbox({ id, checked }) {
    // const idx = this.todos.findIndex((todo) => {
    //   return todo.id === id;
    // });
    // this.todos[idx].checked = checked;
    // },
    // deleteTodo({ id }) {
    // const idx = this.todos.findIndex((todo) => {
    //   return todo.id === id;
    // });
    // this.todos.splice(idx, 1);
    // 또는 아래처럼 구현..
    // this.todos = this.todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // },
  },
};
</script>
