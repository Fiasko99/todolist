<template>
  <div>
    <h1>Home</h1>
    <todo-form-for-add 
      @updateData="updateData" />
    <todo-list 
      :todoClass="todoClass" 
      @updateData="updateData"
      :todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoFormForAdd from "@/components/TodoFormForAdd";
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      todos: [],
      todoClass: 'new'
    }
  },
  components: {
    TodoList, TodoFormForAdd
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
