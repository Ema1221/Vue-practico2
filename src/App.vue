<script setup>
// Importa las dependencias necesarias de vue-router
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Contenedor principal de la aplicación -->
  <div id="app">
    <!-- Componente de encabezado personalizado -->
    <Header />
    
    <!-- Componente de vue-router para renderizar el contenido de las rutas -->
    <router-view />
    
    <!-- Componente de barra lateral de menú personalizado -->
    <menu-sidebar :show="showSidebar" @toggle="toggleSidebar"/>
    
    <!-- Componente de pie de página personalizado -->
    <Footer />
  </div>
</template>

<style>
  /* Estilos para el contenedor principal de la aplicación */
  #app {
    display: block;
    width: 100%;
    height: 700px;
    margin-bottom: 100px;
  }
</style>

<script>
  // Importa los componentes personalizados
  import Header from './components/Header.vue';
  import MenuSidebar from './components/Sidebar.vue'
  import Footer from './components/footer.vue'

  export default {
    data() {
      return{
        // Variable para controlar la visibilidad de la barra lateral
        showSidebar: false
      }
    },
    methods:{
      // Método para alternar la visibilidad de la barra lateral
      toggleSidebar(){
        this.showSidebar = !this.showSidebar;
      }
    },
    components: {
      // Registro de componentes personalizados
      MenuSidebar,
      Header,
      Footer
    }
  }
</script>
