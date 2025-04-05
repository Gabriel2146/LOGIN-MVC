<template>
    <div>
      <h2>Panel CRUD</h2>
      <form @submit.prevent="createItem">
        <input v-model="newItem.name" placeholder="Nombre" />
        <input v-model="newItem.description" placeholder="Descripción" />
        <button type="submit">Crear</button>
      </form>
  
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.description }}
          <button @click="deleteItem(item.id)">Eliminar</button>
        </li>
      </ul>
  
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        items: [],
        newItem: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      async getItems() {
        const token = localStorage.getItem('access')
        const response = await axios.get('http://127.0.0.1:8000/api/items/', {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.items = response.data
      },
      async createItem() {
        const token = localStorage.getItem('access')
        await axios.post('http://127.0.0.1:8000/api/items/', this.newItem, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.newItem = { name: '', description: '' }
        this.getItems()
      },
      async deleteItem(id) {
        const token = localStorage.getItem('access')
        await axios.delete(`http://127.0.0.1:8000/api/items/${id}/`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.getItems()
      },
      logout() {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    mounted() {
      this.getItems()
    }
  }
  </script>
  