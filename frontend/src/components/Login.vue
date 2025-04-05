<template>
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <input v-model="username" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login">Entrar</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/token/', {
            username: this.username,
            password: this.password
          })
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('refresh', response.data.refresh)
          this.$router.push('/dashboard')
        } catch (error) {
          alert('Credenciales inválidas')
        }
      }
    }
  }
  </script>
  