import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // 👈 Esto es clave
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 👇 Aquí validamos si el usuario tiene el token
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access')

  if (to.meta.requiresAuth && !token) {
    alert('⚠️ Debes iniciar sesión primero.')
    next({ name: 'Login' }) // redirige al login
  } else {
    next() // permite navegación
  }
})

export default router
