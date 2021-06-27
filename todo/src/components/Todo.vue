<template>
  <div class="w-9/12 mx-auto text-left my-1">
    <input
      type="checkbox"
      name=""
      :id="todo.id"
      :checked="todo.checked"
      @change="toggleCheckbox"
    />
    <label
      :for="todo.id"
      class="px-2"
      :class="todo.checked ? 'line-through text-gray-400' : ''"
      >{{ todo.text }}
    </label>
    <button
      class="float-right bg-purple-500 hover:bg-purple-800 text-white text-xs p-1 rounded"
      @click="onClickDelete"
    >
      delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(e) {
      // this.$emit("toggle-checkbox", {
      //   id: this.todo.id,
      //   checked: e.target.checked,
      // });
      this.$store.commit("TOGGLE_CHECKBOX", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    onClickDelete() {
      // this.$emit("delete-todo", {
      //   id: this.todo.id,
      // });
      this.$store.commit("DELETE_TODO", this.todo.id);
    },
  },
};
</script>
