# Images Gallery Frontend

## Descripción
Este es el frontend del proyecto Images Gallery, desarrollado con Vue.js. Permite a los usuarios visualizar y gestionar una galería de imágenes.

## Estructura del Proyecto

```
imagesgallery_frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── plugins/
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── vue.config.js
├── package.json
└── README.md
```

## Tecnologías Utilizadas
- Vue.js 3
- Vue Router
- Vuex
- Vuetify
- Axios

## Instalación y Configuración

1. Clona el repositorio:

```bash
git clone https://github.com/rolycore/imagegallery_frontend.git
cd imagesgallery/imagesgallery_frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura Vuetify y las rutas en `src/main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/index'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(vuetify)
app.use(router)
app.mount('#app')
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run serve
```

El frontend estará disponible en `http://localhost:8080`.

## Estructura de Archivos

```
src/
├── assets/
├── components/
├── plugins/
│   └── vuetify.js
├── router/
│   └── index.js
├── store/
│   └── index.js
├── views/
├── App.vue
└── main.js
```
## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o problema, puedes contactarme a través de [shalomsolutiontech@gmail.com](mailto:shalomsolutiontech@gmail.com).
