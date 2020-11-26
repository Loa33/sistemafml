<template>
  <v-container id="proveedores" fluid tag="section">
    <base-v-component heading="Proveedores" link="/proveedores" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Proveedores</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-row>
            <v-col cols="9">
              <v-text-field
                class="text-xs-center"
                v-model="search"
                append-icon="mdi-magnify"
                label="Búsqueda"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col>
              <v-dialog v-model="dialog" max-width="500px">
                <v-btn
                  slot="activator"
                  color="primary"
                  dark
                  class="mb-2"
                  @click="dialog = true"
                  >Nuevo</v-btn
                >
                <v-card>
                    <v-form v-model="valida" ref="form" lazy-validation>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm12 md12>
                                <v-text-field v-model="nombre" label="Nombre" :rules="requieredRules">
                                </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12>
                                <v-text-field v-model="ruc" label="RUC" :rules="rucRules">
                                </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12>
                                <v-text-field v-model="direccion" label="Dirección" :rules="requieredRules">
                                </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                <v-text-field v-model="telefono" label="Teléfono" :rules="telefonoRules">
                                </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                <v-text-field v-model="email" label="Email" :rules="emailRules">
                                </v-text-field>
                                </v-flex>
                            </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click.native="close"
                            >Cancelar</v-btn
                            >
                            <v-btn color="blue darken-1" :disabled="!valida" flat @click.native="guardar"
                            >Guardar</v-btn
                            >
                        </v-card-actions>
                    </v-form>
                </v-card>
              </v-dialog>
              <v-dialog v-model="adModal" max-width="290">
                <v-card>
                  <v-card-title class="headline" v-if="adAccion == 1"
                    >¿Activar Item?</v-card-title
                  >
                  <v-card-title class="headline" v-if="adAccion == 2"
                    >¿Desactivar Item?</v-card-title
                  >
                  <v-card-text>
                    Estás a punto de
                    <span v-if="adAccion == 1">Activar </span>
                    <span v-if="adAccion == 2">Desactivar </span>
                    el ítem {{ adNombre }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click="activarDesactivarCerrar"
                    >
                      Cancelar
                    </v-btn>
                    <v-btn
                      v-if="adAccion == 1"
                      color="orange darken-4"
                      flat="flat"
                      @click="activar"
                    >
                      Activar
                    </v-btn>
                    <v-btn
                      v-if="adAccion == 2"
                      color="orange darken-4"
                      flat="flat"
                      @click="desactivar"
                    >
                      Desactivar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="proveedores"
            :search="search"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.nombre }}</td>
              <td>{{ props.item.ruc }}</td>
              <td>{{ props.item.direccion }}</td>
              <td>{{ props.item.telefono }}</td>
              <td>{{ props.item.email }}</td>

              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">
                  edit
                </v-icon>
              </td>
            </template>
            <template v-slot:[`item.estado`]="{ item }">
              <td>
                <div v-if="item.estado">
                  <span class="blue--text">Activo</span>
                </div>
                <div v-else>
                  <span class="red--text">Inactivo</span>
                </div>
              </td>
            </template>
            <template v-slot:[`item.opciones`]="{ item }">
              <v-icon small class="mr-2" color="teal" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <template v-if="item.estado == 1">
                <v-icon
                  color="red"
                  small
                  @click="activarDesactivarMostrar(2, item)"
                >
                  mdi-toggle-switch
                </v-icon>
              </template>
              <template v-else>
                <v-icon
                  small
                  color="blue"
                  @click="activarDesactivarMostrar(1, item)"
                >
                  mdi-toggle-switch-off
                </v-icon>
              </template>
            </template>
            <template slot="no-data"> </template>
          </v-data-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      proveedores: [],
      proveedoresValidar: [],
      dialog: false,
      headers: [
        { text: "Nombre", value: "nombre" },
        { text: "ruc", value: "ruc", sortable: false },
        { text: "Dirección", value: "direccion", sortable: false },
        { text: "Teléfono", value: "telefono", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false },
      ],
      search: "",
      editedIndex: -1,
      id: "",
      nombre: "",
      ruc: "",
      direccion: "",
      telefono: "",
      email: "",
      valida: true,
      requieredRules: [
        v => !!v || 'Debe llenar este campo',
      ],
      rucRules: [
        v => !!v || 'Debe llenar este campo',
        v => /^[0-9]{11}$/.test(v) || 'Debe ingresar un RUC válido'
      ],
      telefonoRules:[
        v => !!v || 'Debe llenar este campo',
        v => /^(?=.*[0-9])[- +()0-9]+$/.test(v) || 'Debe ingresar un teléfono válido'
      ],
      emailRules:[
        v => !!v || 'Debe llenar este campo',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Debe ingresar un email válido'
      ],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: "",
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nuevo proveedor"
        : "Actualizar proveedor";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.listar();
  },
  methods: {
    listar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Proveedores/Listar", configuracion)
        .then(function (response) {
          //console.log(response);
          me.proveedores = response.data;
          me.proveedoresValidar = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editItem(item) {
      this.id = item.idProveedor;
      this.nombre = item.nombre;
      this.ruc = item.ruc;
      this.direccion = item.direccion;
      this.telefono = item.telefono;
      this.email = item.email;
      this.editedIndex = 1;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.limpiar();
    },
    limpiar() {
      this.id = "";
      this.$refs.form.reset();
      this.nombre = "";
      this.ruc = "";
      this.direccion = "";
      this.telefono = "";
      this.email = "";
      this.editedIndex = -1;
    },
    guardar() {
      if (this.encuentra(this.ruc)) {
        this.$swal("El proveedor ya existe");
      }
      else
      {
      if (this.$refs.form.validate()) {
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      if (this.editedIndex > -1) {
        //Código para editar
        let me = this;
        axios
          .put(
            "api/Proveedores/Actualizar",
            {
              idProveedor: me.id,
              ruc: me.ruc,
              nombre: me.nombre,
              direccion: me.direccion,
              telefono: me.telefono,
              email: me.email,
            },
            configuracion
          )
          .then(function (response) {
            me.close();
            me.listar();
            me.limpiar();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        //Código para guardar
        let me = this;
        axios
          .post(
            "api/Proveedores/Crear",
            {
              nombre: me.nombre,
              ruc: me.ruc,
              direccion: me.direccion,
              telefono: me.telefono,
              email: me.email,
            },
            configuracion
          )
          .then(function (response) {
            me.close();
            me.listar();
            me.limpiar();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
      }
    
    },
    encuentra(ruc) {
      var sw = 0;
      for (var i = 0; i < this.proveedoresValidar.length; i++) {
        if (this.proveedoresValidar[i].ruc == ruc) {
          sw = 1;
        }
      }
      return sw;
    },
    activarDesactivarMostrar(accion, item) {
      this.adModal = 1;
      this.adNombre = item.nombre;
      this.adId = item.idProveedor;
      if (accion == 1) {
        this.adAccion = 1;
      } else if (accion == 2) {
        this.adAccion = 2;
      } else {
        this.adModal = 0;
      }
    },
    activarDesactivarCerrar() {
      this.adModal = 0;
    },
    activar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("api/Proveedores/Activar/" + this.adId, {}, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    desactivar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("api/Proveedores/Desactivar/" + this.adId, {}, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
