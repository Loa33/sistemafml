import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Categorias',
          path: 'almacen/categorias',
          component: () => import('@/views/dashboard/component/Categorias'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        //Compras
        {
          name: 'Compras',
          path: 'compras',
          component: () => import('@/views/dashboard/component/Compra'),
        },
        {
          name: 'Producto',
          path: 'almacen/productos',
          component: () => import('@/views/dashboard/component/Producto'),
        },
        {
          name: 'Proveedores',
          path: 'proveedores',
          component: () => import('@/views/dashboard/component/Proveedor'),
        },
        {
          name: 'Roles',
          path: 'acceso/roles',
          component: () => import('@/views/dashboard/component/Rol'),
        },
        {
          name: 'Usuarios',
          path: 'acceso/usuarios',
          component: () => import('@/views/dashboard/component/Usuario'),
        },
        {
          name: 'Ventas',
          path: 'ventas',
          component: () => import('@/views/dashboard/component/Venta'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/Login'),
        },
      ],
    },
  ],
})
