<template>
  <div>
    <h1>In progress</h1>
    <todo-list 
      :todoClass="todoClass" 
      @updateData="updateData"
      :todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import axios from "axios";

export default {
  name: 'Progress',
  data() {
    return {
      todos: [],
      todoClass: 'progress'
    }
  },
  components: {
    TodoList
  },
  methods: {
    updateData() {
      axios
      .get(this.$dataUrl)
      .then(response => {
        this.todos = response.data
        .filter(todo => todo.todoClass == this.todoClass)
        .sort((a, b) => {
          return b.id - a.id
        })
      })
    }
  },
  created() {
    this.updateData()
  }
}
</script>
