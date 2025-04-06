// src/axios.js

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Tu URL base de la API
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access')}`
  }
})

export default api
