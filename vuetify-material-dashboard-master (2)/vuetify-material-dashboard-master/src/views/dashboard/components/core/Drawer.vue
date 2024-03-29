<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    v-if="logueado"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-img src="@/assets/logo.png" max-height="100" />
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>

      <ul v-for="(item, i) in computedItems" :key="i">
        <div v-if="((i==0) && (esAdministrador || esAlmacenero || esFarmaceutica))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>
        <base-item v-else :key="`item-${i}`" :item="item" />
        </div>
         <div v-if="((i==1) && (esAdministrador || esAlmacenero || esFarmaceutica))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
            </base-item-group>
        </div>
         <div v-if="((i==2) && (esAdministrador || esAlmacenero))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>
        <base-item v-else :key="`item-${i}`" :item="item" />
        </div>
         <div v-if="((i==3 ) && (esAdministrador || esAlmacenero))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>
        <base-item v-else :key="`item-${i}`" :item="item" />
        </div>
         <div v-if="((i==4 ) && (esAdministrador))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>
        <base-item v-else :key="`item-${i}`" :item="item" />
        </div>
         <div v-if="((i==5) && (esAdministrador || esFarmaceutica))">
            <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>
        <base-item v-else :key="`item-${i}`" :item="item" />
        </div>
      </ul>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "dashboard",
        to: "/",
        
      },
      {
        title: "Almacen",
        icon: "mdi-warehouse",
        group: "/almacen",
        children: [
             {
                title: "Categorias",
                icon: "mdi-format-list-bulleted",
                to: "categorias",
              },
            {
              icon: "mdi-package-variant",
              title: "Productos",
              to: "productos",
            },
        ]
      },
      {
        title: "Compras",
        icon: "mdi-cart",
        to: "/compras",
      },
      {
        icon: "mdi-account-group",
        title: "Proveedores",
        to: "/proveedores",
      },
      {
        title: "Acceso",
        icon: "mdi-lock",
        group: "/acceso",
        children: [
             {
                title: "Roles",
                icon: "mdi-account-multiple",
                to: "roles",
              },
              {
                title: "Usuarios",
                icon: "mdi-account-key",
                to: "usuarios",
              },
        ]
      },
      {
        icon: "mdi-cash-multiple",
        title: "Ventas",
        to: "/ventas",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    logueado(){
      return this.$store.state.usuario;
    },
    esAdministrador(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'Administrador'
    },
    esAlmacenero(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'Jefe de Almacén'
    },
    esFarmaceutica(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'Farmaceútica'
    }
  },
  created(){
    this.$store.dispatch('autoLogin');
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    }
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'
#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
        margin-right: 24px
        margin-left: 12px !important

        +rtl()
        margin-left: 24px
        margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
        padding-left: 8px

        +rtl()
        padding-right: 8px

      .v-list-group__header
        +ltr()
        padding-right: 0

        +rtl()
        padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
          margin-right: 8px

          +rtl()
          margin-left: 8px
</style>
