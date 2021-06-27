import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 데이터가 들어가는 곳
    todos: [],
  },
  mutations: {
    // 데이터를 바꾸는 곳 (꼭 여기서!)
    ADD_TODO(state, value) {
      const todo = {
        id: Date.now(),
        text: value,
        checked: false,
      };
      state.todos.push(todo);
    },
    TOGGLE_CHECKBOX(state, { id, checked }) {
      const idx = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[idx].checked = checked;
    },
    DELETE_TODO(state, todoID) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== todoID;
      });
    },
  },
  actions: {
    // 메소드는 여기에
    // 비동기적인 처리.
    // mutation에게 데이터를 바꿔줘~ 함.
  },
  getters: {
    // computed 같은 곳
  },
});
