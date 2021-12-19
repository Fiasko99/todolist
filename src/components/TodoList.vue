<template>
  <div class="todo-list">
    <Todo 
      v-for="todo in todos" 
      :key='todo.id' 
      :todo="todo" :todoClass="todoClass"
      @updateData="updateData" />
  </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: 'todo-list',
  props: {
    todoClass: String,
    todos: Array
  },
  components: {
    Todo
  },
  methods: {
    updateData() {
      this.$emit('updateData')
    }
  },
}
</script>

<style>

</style>