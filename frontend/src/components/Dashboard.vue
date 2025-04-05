<template>
    <div class="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div class="container">
        <div class="card">
          <h3 class="card-title">Create New Item</h3>
          <button class="card-button" @click="navigateToCreate">Create</button>
        </div>
        <div class="card">
          <h3 class="card-title">View Items</h3>
          <button class="card-button" @click="navigateToView">View</button>
        </div>
        <div class="card">
          <h3 class="card-title">Edit Items</h3>
          <button class="card-button" @click="navigateToEdit">Edit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToCreate() {
        this.$router.push('/create-item');
      },
      navigateToView() {
        this.$router.push('/view-items');
      },
      navigateToEdit() {
        this.$router.push('/edit-item');
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 20px;
  }
  
  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    width: 280px;
    transition: transform 0.3s;
    text-align: center;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .card-title {
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .card-button {
    width: 100%;
    padding: 12px;
    background-color: #00bcd4;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .card-button:hover {
    background-color: #007b8c;
  }
  </style>
  