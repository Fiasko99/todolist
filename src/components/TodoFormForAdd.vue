<template>
  <form @submit.prevent="createTodo">
    <div class="app-form-group">
      <label for="title">Заголовок</label>
      <input 
        type="text" 
        id="title"
        v-model="title"
        required />
    </div>
    <div class="app-form-group">
      <label for="text">Текст</label>
      <textarea 
        id="text" 
        cols="30" 
        rows="10" 
        v-model="text"
        required />
    </div>
    <button type="submit">Создать</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: 'todo-form-for-add',
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    createTodo() {
      axios
      .get(this.$dataUrl)
      .then(response => {
        const lastTodo = response.data
        const data = {
          id: lastTodo[lastTodo.length - 1].id + 1,
          title: this.title,
          text: this.text,
          todoClass: 'new'
        }
        axios
        .post(this.$dataUrl, data)
        .then(() => {
          this.$emit('updateData')
          this.title = ''
          this.text = ''
        })
      })
    }
  }
}
</script>

<style>

</style>