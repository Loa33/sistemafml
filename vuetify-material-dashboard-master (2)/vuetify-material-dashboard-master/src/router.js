import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
          meta : {
            administrador: true,
            almacenero: true,
            farmaceutica:true
          }
        },
        {
          name: 'Categorias',
          path: 'almacen/categorias',
          component: () => import('@/views/dashboard/component/Categorias'),
          meta : {
            administrador: true,
            almacenero: true
          }
        },
        //Compras
        {
          name: 'Compras',
          path: 'compras',
          component: () => import('@/views/dashboard/component/Compra'),
          meta : {
            administrador: true,
            almacenero: true
          }
        },
        {
          name: 'Producto',
          path: 'almacen/productos',
          component: () => import('@/views/dashboard/component/Producto'),
          meta : {
            administrador: true,
            almacenero: true,
            farmaceutica:true
          }
        },
        {
          name: 'Proveedores',
          path: 'proveedores',
          component: () => import('@/views/dashboard/component/Proveedor'),
          meta : {
            administrador: true,
            almacenero: true
          }
        },
        {
          name: 'Roles',
          path: 'acceso/roles',
          component: () => import('@/views/dashboard/component/Rol'),
          meta : {
            administrador: true
          }
        },
        {
          name: 'Usuarios',
          path: 'acceso/usuarios',
          component: () => import('@/views/dashboard/component/Usuario'),
          meta : {
            administrador: true
          }
        },
        {
          name: 'Ventas',
          path: 'ventas',
          component: () => import('@/views/dashboard/component/Venta'),
          meta : {
            administrador: true,
            farmaceutica:true
          }
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/Login'),
          meta : {
            libre: true
          }
        },
      ],
    },
  ],
})

router.beforeEach((to, form, next) => {
  if(to.matched.some(record => record.meta.libre)){
    next()
  }else if(store.state.usuario && store.state.usuario.rol == "Administrador"){
    if(to.matched.some(record => record.meta.administrador))
    {
        next()
    }
  }else if(store.state.usuario && store.state.usuario.rol == "Jefe de Almacén"){
    if(to.matched.some(record => record.meta.almacenero))
    {
        next()
    }
  }else if(store.state.usuario && store.state.usuario.rol == "Farmaceútica"){
    if(to.matched.some(record => record.meta.farmaceutica))
    {
        next()
    }
  }else{
    next({
      name:'Login'
    })
  }
})

export default router