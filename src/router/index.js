import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Configuracion from '../views/Configuracion.vue'
import AcercaDe from '../views/AcercaDe.vue'

// Crea un enrutador usando Vue Router
const router = createRouter({
  // Configuración de la historia de navegación web
  history: createWebHistory(import.meta.env.BASE_URL),
  // Definición de las rutas de la aplicación
  routes: [
    {
      path: '/', // Ruta de inicio
      name: 'home', // Nombre de la ruta
      component: HomeView // Componente asociado a la ruta
    },
    {
      path: '/Configuracion', // Ruta de configuración
      name: 'configuracion', // Nombre de la ruta
      component: Configuracion // Componente asociado a la ruta
    },
    {
      path: '/AcercaDe', // Ruta de "Acerca de"
      name: 'acercaDe', // Nombre de la ruta
      component: AcercaDe // Componente asociado a la ruta
    }
  ]
})

export default router // Exporta el enrutador
