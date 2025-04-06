<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Iniciar sesión</h2>
      <input v-model="username" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login">Entrar</button>
    </div>
  </div>
</template>

<script>
import api from '../axios'
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
        const res = await api.post('/token/', {
          username: this.username,
          password: this.password
        })

        localStorage.setItem('access', res.data.access)
        localStorage.setItem('refresh', res.data.refresh)

        this.$toast.success('Login exitoso')
        setTimeout(() => this.$router.push('/dashboard'), 1000)
      } catch (err) {
        this.$toast.error('Credenciales incorrectas')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  background-color: #121212;
  justify-content: center;
  align-items: center;
}

.login-form {
  background-color: #1f1f1f;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  color: #fff;
}

input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #333;
  color: white;
}

button {
  width: 100%;
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}
</style>

  