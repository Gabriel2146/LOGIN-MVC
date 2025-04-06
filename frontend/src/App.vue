<template>
  <div class="app-container">
    <div class="sidebar">
      <h2>Login MVC</h2>
      <ul>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #121212; /* Dark background */
  color: #fff;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar Styles */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #1c1c1c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar h2 {
  color: #fff;
  font-size: 24px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 20px 0;
}

.sidebar ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: #00bcd4;
}

/* Content Area Styles */
.content {
  margin-left: 250px;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

h1 {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
}

.card {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.card-title {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
}

.card-button {
  width: 100%;
  padding: 10px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.card-button:hover {
  background-color: #007b8c;
}
</style>
