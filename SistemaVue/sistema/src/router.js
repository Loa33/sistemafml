import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categoria from './components/Categoria.vue'
import Producto from './components/Producto.vue'
import Rol from './components/Rol.vue'
import Usuario from './components/Usuario.vue'
import Proveedor from './components/Proveedor.vue'
import Login from './components/Login.vue'
import Compra from './components/Compra.vue'
import Venta from './components/Venta.vue'
import store from './store'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
     
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: Categoria
    },
    {
      path: '/productos',
      name: 'productos',
      component: Producto
    },
    {
      path: '/compras',
      name: 'compras',
      component: Compra
    },
    {
      path: '/roles',
      name: 'roles',
      component: Rol
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuario
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: Venta
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Proveedor
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta : {
        libre: true
      }
    }
  ]
})


export default router
