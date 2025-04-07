# 🛡️ Vue + Django JWT CRUD App

Esta es una aplicación fullstack construida con **Vue.js 3** y **Django REST Framework**, que implementa autenticación JWT, protección de rutas y operaciones CRUD protegidas.

## 🔐 Funcionalidades principales

- Autenticación con **JWT**.
- Protección de rutas en el frontend.
- CRUD completo para tareas (crear, leer, actualizar y eliminar).
- Tokens almacenados en `localStorage` y enviados automáticamente.
- Redirección automática si el token es inválido o expirado.
- Scroll en el dashboard para mostrar múltiples ítems.
- Logout seguro con limpieza de tokens.

---

## 🚀 Tecnologías utilizadas

### Frontend (Vue 3 + Vite)

- Vue Router
- Axios
- Scoped CSS para estilos modernos
- Protección de rutas con meta y guards
- Alerts visuales y consola para feedback

### Backend (Django + DRF)

- Django REST Framework
- JWT Authentication con `djangorestframework-simplejwt`
- ViewSets y Serializers para el modelo `Item`
- Permisos de autenticación para todas las rutas protegidas

---

## 📂 Estructura del proyecto

```
/frontend
  ├── src
  │   ├── components
  │   │   ├── Login.vue
  │   │   └── Dashboard.vue
  │   ├── axios.js
  │   └── router.js
/backend
  ├── api
  │   ├── views.py
  │   ├── serializers.py
  │   └── models.py
  └── settings.py
```

---

## ⚙️ Configuración

### 1. Backend (Django)

```bash
cd backend
python -m venv env
source env/bin/activate  # o .\env\Scripts\activate en Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Endpoints importantes:**

- `/api/token/` – login
- `/api/items/` – CRUD (requiere token)

### 2. Frontend (Vue 3)

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Flujo de autenticación

1. El usuario inicia sesión con su correo y contraseña.
2. El backend responde con un `access` y `refresh` token.
3. El `access` se guarda en `localStorage` y se usa en cada solicitud.
4. Si el token expira o no existe, se redirige automáticamente al login.

---

## ✅ Protección de rutas

- El `Dashboard` no es accesible si no hay un token válido.
- Si se intenta acceder directamente vía URL (`/dashboard`), se redirige automáticamente a `/`.

---

## 🔄 CRUD protegido

- El token se incluye automáticamente en cada solicitud (`Authorization: Bearer <token>`).
- Solo usuarios autenticados pueden acceder y modificar los ítems.
- Feedback visual en consola y con alertas.

---

## 🧪 Pruebas en Postman

- Probar el login con `POST /api/token/`
- Usar el token para acceder a `GET /api/items/`
- Verificar que sin token el backend responde `401 Unauthorized`.

---

## 📸 Vista previa

![image](https://github.com/user-attachments/assets/35313d37-bc50-4599-9147-8e80bb719e7b)

---

## 🙌 Autor

Proyecto creado por Gabriel Padilla 

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente con atribución.

```

---

¿Quieres que agregue el `README.md` como archivo dentro de tu frontend o backend también? ¿O te gustaría que incluya una guía de despliegue a producción (por ejemplo en Render, Vercel o Heroku)?
