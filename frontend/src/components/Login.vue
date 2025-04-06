<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Iniciar sesión</h2>
        <input v-model="username" type="text" placeholder="Usuario" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button @click="login" class="login-btn">Entrar</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { useToast } from 'vue-toast-notification'
  
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
  
          // Notificación de login exitoso
          this.$toast.success('¡Login exitoso! Redirigiendo...', { position: 'top-right' })
          
          // Redirigir al dashboard
          setTimeout(() => {
            this.$router.push('/dashboard')
          }, 1500)
          
        } catch (error) {
          // Notificación de error en login
          this.$toast.error('Credenciales incorrectas', { position: 'top-right' })
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
  }
  
  .login-form {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 24px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  