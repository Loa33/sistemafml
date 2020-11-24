<template>
  <v-container id="productos" fluid tag="section">
    <base-v-component heading="Productos" link="almacen/productos" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Productos</div>
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
            <template v-slot:activator="{ on }">
                  <v-btn
                   v-on="on"
                  color="primary"
                  dark
                  class="mb-2"
                  @click="dialog = true"
                  >Nuevo</v-btn
                >
                </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs6 sm6 md6>
                    <v-text-field v-model="codigo" label="Código">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs6 sm6 md6>
                    <v-select
                      v-model="idCategoria"
                      :items="categorias"
                      label="Categoría"
                    >
                    </v-select>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6 sm6 md6>
                    <v-text-field type="number" v-model="stock" label="Stock">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs6 sm6 md6>
                    <v-text-field
                      type="number"
                      v-model="precioVenta"
                      label="Precio Venta"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="descripcion"
                      label="Descripción"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12 v-show="valida">
                    <div
                      class="red--text"
                      v-for="v in validaMensaje"
                      :key="v"
                      v-text="v"
                    ></div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" flat @click.native="guardar"
                >Guardar</v-btn
              >
            </v-card-actions>
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
            :items="productos"
            :search="search"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.codigo }}</td>
              <td>{{ props.item.nombre }}</td>
              <td>{{ props.item.categoria }}</td>
              <td>{{ props.item.stock }}</td>
              <td>{{ props.item.precioVenta }}</td>
              <td>{{ props.item.descripcion }}</td>
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
              <v-icon small class="mr-2" color="teal" @click="editItem(item)">mdi-pencil</v-icon>
                <template v-if="item.estado==true">
                  <v-icon small class="mr-2" color="red" @click="activarDesactivarMostrar(2,item)">mdi-toggle-switch</v-icon>
                </template>
                <template v-else>
                    <v-icon small class="mr-2" color="blue" @click="activarDesactivarMostrar(1,item)">mdi-toggle-switch-off</v-icon>
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
      productos: [],
      dialog: false,
      headers: [
        { text: "Código", value: "codigo", sortable: false },
        { text: "Nombre", value: "nombre" },
        { text: "Categoría", value: "categoria" },
        { text: "Stock", value: "stock", sortable: false },
        { text: "Precio Venta", value: "precioVenta", sortable: false },
        { text: "Descripción", value: "descripcion", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false }
      ],
      search: "",
      editedIndex: -1,
      id: "",
      idCategoria: "",
      categorias: [],
      codigo: "",
      nombre: "",
      stock: 0,
      precioVenta: 0,
      descripcion: "",
      valida: 0,
      validaMensaje: [],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: "",
      error: null,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo producto" : "Actualizar producto";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.listar();
    this.select();
  },
  methods: {
    listar() {
      let me = this;
      let header={"Authorization" : "Bearer " + this.$store.state.token};
      let configuracion = {headers : header};
      axios
        .get("api/Productos/Listar",configuracion)
        .then(function (response) {
          //console.log(response);
          me.productos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    select() {
      let me = this;
      let header={"Authorization" : "Bearer " + this.$store.state.token};
      let configuracion = {headers : header};
      var categoriasArray = [];
      axios
        .get("api/Categorias/Select", configuracion)
        .then(function (response) {
          categoriasArray = response.data;
          categoriasArray.map(function (x) {
            me.categorias.push({ text: x.nombre, value: x.idCategoria });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editItem(item) {
      this.id = item.idProducto;
      this.idCategoria = item.idCategoria;
      this.codigo = item.codigo;
      this.nombre = item.nombre;
      this.stock = item.stock;
      this.precioVenta = item.precioVenta;
      this.descripcion = item.descripcion;
      this.editedIndex = 1;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.limpiar();
    },
    limpiar() {
      this.id = "";
      this.idCategoria = "";
      this.codigo = "";
      this.nombre = "";
      this.stock = "";
      this.precioVenta = "";
      this.descripcion = "";
      this.editedIndex = -1;
    },
    guardar() {
      if (this.validar()) {
        return;
      }
      let header={"Authorization" : "Bearer " + this.$store.state.token};
      let configuracion = {headers : header};
      if (this.editedIndex > -1) {
        //Código para editar
        //Código para guardar
        let me = this;
        axios
          .put("api/Productos/ActualizarProducto", {
            idProducto: me.id,
            idCategoria: me.idCategoria,
            codigo: me.codigo,
            nombre: me.nombre,
            stock: me.stock,
            precioVenta: me.precioVenta,
            descripcion: me.descripcion,
          }, configuracion)
          .then(function (response) {
            me.close();
            me.listar();
            me.limpiar();
          })
          .catch(function (err) {
            if(err.response.status==403){
            me.$swal('No tiene permisos para realizar esta acción');
          }
          });
      } else {
        //Código para guardar
        let me = this;
        axios
          .post("api/Productos/Crear", {
            idCategoria: me.idCategoria,
            codigo: me.codigo,
            nombre: me.nombre,
            stock: me.stock,
            precioVenta: me.precioVenta,
            descripcion: me.descripcion,
          }, configuracion)
          .then(function (response) {
            me.close();
            me.listar();
            me.limpiar();
          })
          .catch(function (err) {
            if(err.response.status==403){
            me.$swal('No tiene permisos para realizar esta acción');
            }
          });
      }
    },
    validar() {
      this.valida = 0;
      this.validaMensaje = [];

      if (this.nombre.length < 3 || this.nombre.length > 50) {
        this.validaMensaje.push(
          "El nombre debe tener más de 3 caracteres y menos de 50 caracteres."
        );
      }
      if (!this.idCategoria) {
        this.validaMensaje.push("Seleccione una categoría.");
      }
      if (!this.stock || this.stock == 0) {
        this.validaMensaje.push("Ingrese el stock inicial del artículo.");
      }
      if (!this.precioVenta || this.precioVenta == 0) {
        this.validaMensaje.push("Ingrese el precio de venta del artículo.");
      }
      if (this.validaMensaje.length) {
        this.valida = 1;
      }
      return this.valida;
    },
    activarDesactivarMostrar(accion, item) {
      this.adModal = 1;
      this.adNombre = item.nombre;
      this.adId = item.idProducto;
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
      let header={"Authorization" : "Bearer " + this.$store.state.token};
      let configuracion = {headers : header};
      axios
        .put("api/Productos/Activar/" + this.adId, {}, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (err) {
          if(err.response.status==403 || err.response.status==401){
            me.$swal('No tiene permisos para realizar esta acción');}
        });
    },
    desactivar() {
      let me = this;
      let header={"Authorization" : "Bearer " + this.$store.state.token};
      let configuracion = {headers : header};
      axios
        .put("api/Productos/Desactivar/" + this.adId, {}, configuracion)
        .then(function (response) {
          me.adModal = 0;
          me.adAccion = 0;
          me.adNombre = "";
          me.adId = "";
          me.listar();
        })
        .catch(function (err) {
          if(err.response.status==403 || err.response.status==401){
            me.$swal('No tiene permisos para realizar esta acción');}
        });
    },
  },
};
</script>
