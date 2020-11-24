<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn  v-if="logueado" class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn @click="salir" v-if="logueado" class="ml-2" min-width="0" style="color:#999;">
      <v-icon>mdi-account-arrow-right</v-icon> Salir
    </v-btn>
    <v-btn :to="{name:'Login'}"  v-else class="ml-2" min-width="0" style="color:#999;" >
      <v-icon>mdi-account</v-icon> Login
    </v-btn>
  </v-app-bar>
</template>






<script>
// Components
import { VHover, VListItem } from "vuetify/lib";

// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  watch: {
  },
  name: "DashboardCoreAppBar",

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    "black--text": !hover,
                    "white--text secondary elevation-12": hover,
                  },
                  props: {
                    activeClass: "",
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                },
                this.$slots.default
              );
            },
          },
        });
      },
    },
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one",
    ],
  }),

  computed: {
    ...mapState(["drawer"]),
    logueado(){
      return this.$store.state.usuario;
    },
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
    salir(){
      this.$store.dispatch("salir");
    }
  },
};
</script>
