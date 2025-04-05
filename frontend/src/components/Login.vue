<template>
    <div class="login-container">
      <div class="login-card">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
          <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" placeholder="Enter username" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter password" required />
          </div>
          <button type="submit" class="btn-submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      loginUser() {
        // Handle login logic
        console.log("Login attempted", this.username, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
  }
  
  .login-card {
    background-color: #1e1e1e;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 400px;
  }
  
  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-group label {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 5px;
    color: white;
  }
  
  .input-group input:focus {
    outline: none;
    border-color: #00bcd4;
  }
  
  .btn-submit {
    width: 100%;
    padding: 10px;
    background-color: #00bcd4;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #007b8c;
  }
  </style>
  