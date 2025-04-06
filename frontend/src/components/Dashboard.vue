<template>
  <div class="dashboard-container">
    <h1 class="title">📋 Lista de Tareas</h1>

    <!-- Formulario de creación o edición -->
    <div class="form-container">
      <input v-model="newItem.name" placeholder="Nombre de la tarea" />
      <input v-model="newItem.description" placeholder="Descripción de la tarea" />
      <button @click="editMode ? updateItem() : createItem" class="action-btn">
        {{ editMode ? 'Actualizar' : 'Agregar' }}
      </button>
    </div>

    <!-- Mostrar ítems -->
    <div v-if="items.length > 0" class="items-container">
      <div v-for="item in items" :key="item.id" class="item-card">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <div class="item-actions">
          <button @click="editItem(item)" class="edit-btn">✏️ Editar</button>
          <button @click="deleteItem(item.id)" class="delete-btn">🗑 Eliminar</button>
        </div>
      </div>
    </div>
    <div v-else class="no-items">No hay tareas aún. ¡Agrega una!</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  data() {
    return {
      newItem: {
        name: '',
        description: ''
      },
      items: [],
      editMode: false,
      editingItem: null
    }
  },
  methods: {
    async getItems() {
      try {
        const token = localStorage.getItem('access')
        const response = await axios.get('http://127.0.0.1:8000/api/items/', {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.items = response.data
      } catch (error) {
        console.error('Error al obtener ítems:', error)
        if (error.response?.status === 401) {
          alert('Sesión expirada. Inicia sesión nuevamente.')
          this.$router.push('/')
        }
      }
    },
    async createItem() {
      const token = localStorage.getItem('access')
      try {
        await axios.post('http://127.0.0.1:8000/api/items/', this.newItem, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.newItem = { name: '', description: '' }
        await this.getItems()
      } catch (error) {
        console.error('Error al crear ítem:', error)
      }
    },
    async editItem(item) {
      this.editMode = true
      this.editingItem = item
      this.newItem = { ...item }
    },
    async updateItem() {
      const token = localStorage.getItem('access')
      try {
        await axios.put(`http://127.0.0.1:8000/api/items/${this.editingItem.id}/`, this.newItem, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.editingItem = null
        this.newItem = { name: '', description: '' }
        this.editMode = false
        await this.getItems()
      } catch (error) {
        console.error('Error al actualizar ítem:', error)
      }
    },
    async deleteItem(id) {
      const token = localStorage.getItem('access')
      try {
        await axios.delete(`http://127.0.0.1:8000/api/items/${id}/`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        await this.getItems()
      } catch (error) {
        console.error('Error al eliminar ítem:', error)
      }
    }
  },
  mounted() {
    this.getItems()
  }
}
</script>

<style scoped>
.dashboard-container {
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Roboto', sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #bb86fc;
}

.form-container {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
}

input {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: #1f1f1f;
  color: #e0e0e0;
  width: 250px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #6200ea;
  outline: none;
}

button {
  padding: 14px 28px;
  border-radius: 10px;
  border: none;
  background-color: #6200ea;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3700b3;
}

.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.item-card {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  transition: transform 0.3s ease;
}

.item-card:hover {
  transform: scale(1.05);
}

.item-card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #bb86fc;
}

.item-actions {
  display: flex;
  gap: 10px;
}

.edit-btn, .delete-btn {
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.edit-btn {
  background-color: #03a9f4;
  color: white;
  border: 1px solid #0288d1;
}

.edit-btn:hover {
  background-color: #0288d1;
}

.delete-btn {
  background-color: #ff5722;
  color: white;
  border: 1px solid #d84315;
}

.delete-btn:hover {
  background-color: #d84315;
}

.no-items {
  text-align: center;
  margin-top: 40px;
  font-size: 1.2rem;
  opacity: 0.7;
  color: #bb86fc;
}
</style>
