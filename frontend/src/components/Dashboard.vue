<template>
  <div class="dashboard">
    <div class="top-bar">
      <h1>📋 Lista de Tareas</h1>
      <button class="logout-btn" @click="logout">Cerrar sesión 🔒</button>
    </div>

    <!-- Formulario -->
    <div class="form">
      <input v-model="newItem.name" placeholder="Nombre de la tarea" />
      <input v-model="newItem.description" placeholder="Descripción" />
      <button @click="editMode ? updateItem() : createItem()">
        {{ editMode ? 'Actualizar' : 'Agregar' }}
      </button>
    </div>

    <!-- Lista de tareas con scroll -->
    <div ref="itemsContainer" class="list-scroll">
      <div v-if="items.length" class="list">
        <div v-for="item in items" :key="item.id" class="item">
          <strong>{{ item.name }}</strong> - {{ item.description }}
          <div class="actions">
            <button @click="editItem(item)">✏️</button>
            <button @click="deleteItem(item.id)">🗑️</button>
          </div>
        </div>
      </div>
      <div v-else>No hay tareas</div>
    </div>
  </div>
</template>

<script>
import api from '../axios'

export default {
  name: 'Dashboard',
  data() {
    return {
      items: [],
      newItem: { name: '', description: '' },
      editMode: false,
      editingItem: null
    }
  },
  methods: {
    async fetchItems() {
      try {
        const res = await api.get('/items/')
        this.items = res.data
        console.log('✅ Items cargados correctamente')
        alert('✅ Token válido. Acceso autorizado.')
      } catch (err) {
        console.error('❌ Error al cargar items', err)
        this.handleAuthError(err)
      }
    },
    async createItem() {
      try {
        const res = await api.post('/items/', this.newItem)
        console.log('✅ Item creado:', res.data)
        this.newItem = { name: '', description: '' }
        await this.fetchItems()
        this.scrollToBottom()
      } catch (err) {
        console.error('❌ Error al crear item:', err)
        this.handleAuthError(err)
      }
    },
    async updateItem() {
      try {
        await api.put(`/items/${this.editingItem.id}/`, this.newItem)
        console.log('✅ Item actualizado')
        this.newItem = { name: '', description: '' }
        this.editingItem = null
        this.editMode = false
        await this.fetchItems()
        this.scrollToBottom()
      } catch (err) {
        console.error('❌ Error al actualizar item:', err)
        this.handleAuthError(err)
      }
    },
    async deleteItem(id) {
      try {
        await api.delete(`/items/${id}/`)
        console.log('✅ Item eliminado')
        await this.fetchItems()
      } catch (err) {
        console.error('❌ Error al eliminar item:', err)
        this.handleAuthError(err)
      }
    },
    editItem(item) {
      this.newItem = { ...item }
      this.editMode = true
      this.editingItem = item
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.itemsContainer
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    },
    handleAuthError(err) {
      if (err.response?.status === 401) {
        alert('⚠️ Token inválido o expirado. Inicia sesión de nuevo.')
        this.$router.push('/')
      } else {
        alert('❌ Error inesperado. Ver consola.')
      }
    },
    logout() {
      localStorage.removeItem('access')
      alert('👋 Sesión cerrada correctamente.')
      this.$router.push('/')
    }
  },
  mounted() {
    this.fetchItems()
  }
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background: #1e1e1e;
  color: white;
  min-height: 100vh;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logout-btn {
  background-color: #ff1744;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.logout-btn:hover {
  background-color: #d50000;
}

h1 {
  color: #bb86fc;
}

.form {
  margin-bottom: 1rem;
}

input {
  margin-right: 10px;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}

button {
  padding: 0.5rem 1rem;
  background: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #3700b3;
}

.list-scroll {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
  margin-top: 1rem;
}

.item {
  background: #2e2e2e;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 5px;
}

.actions {
  margin-top: 0.5rem;
}

.actions button {
  margin-right: 5px;
}
</style>
