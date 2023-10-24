<template>
  <!-- Transición para el menú deslizante -->
  <transition name="sidebar-slide">
    <!-- Barra lateral del menú -->
    <aside class="sidebar" :class="{'open': show}">
      <!-- Botón para mostrar/ocultar la barra lateral -->
      <button @click="toggleSidebar" class="toggle-button">
        <img :src="iconoMenu" alt="Icono Menu">
      </button>
      <!-- Contenido del menú -->
      <div class="profile">
        <!-- Imagen de perfil del usuario -->
        <img :src="urlPerfil" alt="Imagen de perfil" class="profile-image">
        <!-- Nombre de usuario -->
        <p class="nombreUsuario">{{ nombreUsuario }}</p>
      </div>
      <!-- Lista de enlaces del menú -->
      <div class="cont-menu">
        <ul>
          <!-- Enlace a la página de inicio -->
          <li>
            <router-link to="/" class="menu-link">
              <img src="@/components/icons/hogar.png" alt="Inicio" class="menu-icon"> 
              <span class="menu-text">Inicio</span>
            </router-link>
          </li>
          <!-- Enlace a la página de configuración -->
          <li>
            <router-link to="/Configuracion" class="menu-link">
              <img src="@/components/icons/herramientas.png" alt="Configuración" class="menu-icon">
              <span class="menu-text">Configuración</span>
            </router-link>
          </li>
          <!-- Enlace a la página "Acerca de" -->
          <li>
            <router-link to="/AcercaDe" class="menu-link">
              <img src="@/components/icons/acerca-de.png" alt="Acerca De" class="menu-icon">
              <span class="menu-text">Acerca de</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>

<script>
import iconMenu from '@/components/icons/menu.png';
import { RouterLink } from 'vue-router';

export default {
  props: {
    show: Boolean // Propiedad para controlar si la barra lateral está abierta o cerrada
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle'); // Emite un evento para mostrar/ocultar la barra lateral
    }
  },
  data() {
    return {
      iconoMenu: iconMenu, // Icono del menú
      nombreUsuario: '', // Nombre de usuario
      urlPerfil: '', // URL de la imagen de perfil
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle"); // Método para mostrar/ocultar la barra lateral
    },
  },
  watch: {
    $route() {
      // Actualiza los datos del usuario cuando cambia la ruta
      const nuevoNombre = localStorage.getItem('nombreUsuario') || '';
      const nuevaUrlPerfil = localStorage.getItem('urlPerfil') || '';

      if (nuevoNombre !== this.nombreUsuario || nuevaUrlPerfil !== this.urlPerfil) {
        this.nombreUsuario = nuevoNombre;
        this.urlPerfil = nuevaUrlPerfil;
      }
    }
  }
};
</script>

<style>
/* Estilos CSS para el componente (sin omitir nada) */
body{
    background-color:#fff ;
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.3s ease, width 0.3s ease;
}

.sidebar-slide-enter-to,
.sidebar-slide-leave-from {
  transform: translateX(-100%);
  width: 100px;
  left: -150px;
}

.sidebar {
  width: 250px;
  min-width: 70px;
  height: 100%;
  background-color:  rgb(85, 172, 171);
  color: #fff;
  position: fixed;
  top: 0;
  box-shadow: 1px 0px 5px 1px black;
  left: -150px;
  transform: translateX(0);
  transition: transform 0.3s ease, width 0.3s ease, left 0.3s ease;
}

.sidebar.open {
  width: 250px;
  min-width: 250px;
  transform: translateX(0);
  background-color: rgb(72 95 111);
  left: 0;
}

.toggle-button {
  position: fixed;
  background:none;
  opacity: 1;
  top: 10px;
  right: 10px;
  border: none;
  height: auto;
}

.toggle-button img{
  width: 32px;
}

.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  position: fixed;
  top: 100px;
  right: 0;
  left: 0;
}

.profile-image{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: width 0.3 ease;
}

.nombreUsuario {
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
}

.profile p{
  color: #ffffff;
}

.sidebar:not(.open) .profile p{
  position: absolute;
  left: -150px;
}

.sidebar:not(.open) .profile-image{
  width: 60px;
  height: 60px;
  position: fixed;
  right: 20px;
  top: 100px;
}

.sidebar:not(.open) .menu-icon{
  position: fixed;
  right: 20px;
}

.menu-icon{
  width: 32px;
  height: 32px;
  margin-right: 20px;
}

.cont-menu{
  margin-top: 125%;
  height: 200px;
}

.menu-link{
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  padding: 20px;
  color: #fff;
  transition: background-color 0.3s ease;
}

.menu-link:hover {
  background-color: #094aa6;
}

.menu-text{
  margin-right: 10px;
}

ul{
  list-style-type: none;
  padding: 0;
}

li{
  margin: 0;
}
</style>
