<template>
  <div class="app-todo">
    <hr>
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.text }}</p>
    <button @click="editTodo" v-if="todoClass == 'new'">В работе</button>
    <button @click="completeTodo" v-if="todoClass == 'new' || todoClass == 'progress'">Завершено</button>
    <button @click="deleteTodo" v-if="todoClass == 'new' || todoClass == 'progress'">Удалить</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'to-do',
  props: {
    todo: Object,
    todoClass: String
  },
  methods: {
    editTodo() {
      const data = {
        ...this.todo,
        todoClass: 'progress'
      }
      axios
      .put(`${this.$dataUrl}/${this.todo.id}`, data)
      .then(() => {
        this.$emit('updateData')
      })
    },
    completeTodo() {
      const data = {
        ...this.todo,
        todoClass: 'complete'
      }
      axios
      .put(`${this.$dataUrl}/${this.todo.id}`, data)
      .then(() => {
        this.$emit('updateData')
      })
    },
    deleteTodo() {
      axios
      .delete(`${this.$dataUrl}/${this.todo.id}`)
      .then(() => {
        this.$emit('updateData')
      })
    }
  }
}
</script>

<style>

</style>