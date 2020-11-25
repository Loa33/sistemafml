<template>
  <v-container id="compras" fluid tag="section">
    <base-v-component heading="Compras" link="/compras" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Compras</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-row>
            <v-col cols="9">
              <v-text-field
                v-if="verNuevo == 0"
                class="text-xs-center"
                v-model="search"
                append-icon="mdi-magnify"
                label="Búsqueda"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col >
              <v-btn
                v-if="verNuevo == 0"
                @click="mostrarNuevo"
                color="primary"
                dark
                class="mb-2"
                >Nuevo</v-btn
              >
            </v-col>
          </v-row>

          <v-dialog v-model="verProductos" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="headline">Seleccione un producto</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                      <v-text-field
                        class="text-xs-center"
                        v-model="searchProductos"
                        append-icon="mdi-magnify"
                        label="Búsqueda"
                        single-line
                        hide-details
                      ></v-text-field>
                      <template>
                        <v-data-table
                          :headers="cabeceraProductos"
                          :items="productos"
                          :search="searchProductos"
                          class="elevation-1"
                        >
                          <template v-slot:[`item.seleccionar`]="{ item }">
                            <v-icon
                              small
                              class="mr-2"
                              color="green"
                              @click="agregarDetalle(item)"
                            >
                              mdi-plus-circle
                            </v-icon>
                          </template>
                          <template slot="items" slot-scope="props">
                            <td class="justify-center layout px-0"></td>
                            <td>{{ props.item.nombre}}</td>
                            <td>{{ props.item.categoria }}</td>
                            <td>{{ props.item.descripcion }}</td>
                            <td>{{ props.item.stock }}</td>
                            <td>{{ props.item.precioVenta }}</td>
                          </template>
                          <template slot="no-data">
                            <h3>No hay productos para mostrar.</h3>
                          </template>
                        </v-data-table>
                      </template>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="ocultarProductos()" color="blue darken">
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="adModal" max-width="290">
            <v-card>
              <v-card-title class="headline" v-if="adAccion == 1"
                >¿Activar Compra?</v-card-title
              >
              <v-card-title class="headline" v-if="adAccion == 2"
                >¿Anular Compra?</v-card-title
              >
              <v-card-text>
                Estás a punto de
                <span v-if="adAccion == 1">Activar </span>
                <span v-if="adAccion == 2">Anular </span>
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
                  Anular
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-data-table
            :headers="headers"
            :items="compras"
            :search="search"
            class="elevation-1"
            v-if="verNuevo == 0"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.usuario }}</td>
              <td>{{ props.item.proveedor }}</td>
              <td>{{ props.item.serieComprobante }}</td>
              <td>{{ props.item.numeroComprobante }}</td>
              <td>{{ props.item.fecha }}</td>
              <td>{{ props.item.igv }}</td>
              <td>{{ props.item.total }}</td>
            </template>
            <template v-slot:[`item.estado`]="{ item }">
                <div v-if="item.estado == 'Aceptado'">
                  <span class="blue--text">Aceptado</span>
                </div>
                <div v-else>
                  <span class="red--text">{{ item.estado }}</span>
                </div>
            </template>
            <template v-slot:[`item.opciones`]="{ item }">
              <v-icon
                small
                class="mr-2"
                color="teal"
                @click="verDetalles(item)"
              >
                mdi-dots-horizontal
              </v-icon>
              <template v-if="item.estado == 'Aceptado'">
                <v-icon
                  color="red"
                  small
                  @click="activarDesactivarMostrar(2, item)"
                >
                  mdi-toggle-switch
                </v-icon>
              </template>
            </template>
            <template slot="no-data"> </template>
          </v-data-table>
          <v-container grid-list-sm class="pa-4 white" v-if="verNuevo">
            <v-form v-model="valida" ref="form" lazy-validation>
              <v-layout row wrap>
                <v-flex xs12 sm4 md4 lg4 xl4>
                  <v-text-field
                    v-model="serieComprobante"
                    label="Serie Comprobante"
                    :rules="requiredRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 xl4>
                  <v-text-field
                    v-model="numeroComprobante"
                    label="Número Comprobante"
                    :rules="numerocRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8 lg8 xl8>
                  <v-select
                    v-model="idProveedor"
                    :items="proveedores"
                    :rules="requiredRules"
                    label="Proveedor"
                  >
                  </v-select>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 xl4>
                  <v-text-field type="number" v-model="igv" label="Igv" :rules="requiredRules">
                  </v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8 lg8 xl8>
                  <v-text-field
                    @keyup.enter="buscarCodigo()"
                    v-model="codigo"
                    label="Código"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 sm2 md2 lg2 xl2>
                  <v-btn
                    @click="mostrarProductos()"
                    small
                    fab
                    dark
                    color="teal"
                  >
                    <v-icon dark>mdi-format-list-bulleted</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-data-table
                    :headers="cabeceraDetalles"
                    :items="detalles"
                    hide-actions
                    class="elevation-1"
                  >
                    <template v-slot:[`item.borrar`]="{ item }">
                      <v-icon
                        small
                        class="mr-2"
                        @click="eliminarDetalle(detalles, item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:[`item.producto`]="{ item }">
                      <td>{{ item.producto }}</td>
                    </template>
                    <template v-slot:[`item.cantidad`]="{ item }">
                      <td>
                        <v-text-field
                          type="number"
                          v-model="item.cantidad"
                        ></v-text-field>
                      </td>
                    </template>
                    <template v-slot:[`item.precio`]="{ item }">
                      <td>
                        <v-text-field
                          type="number"
                          v-model="item.precio"
                        ></v-text-field>
                      </td>
                    </template>
                    <template v-slot:[`item.subtotal`]="{ item }">
                      <td>
                        S/. {{ (item.cantidad * item.precio).toFixed(2) }}
                      </td>
                    </template>
                    <template slot="no-data">
                      <h3>No hay productos agregados al detalle.</h3>
                    </template>
                  </v-data-table>
                  <v-col
                    align="right"
                    style="padding-top: 4px; padding-bottom: 0px"
                  >
                    <strong>Total Parcial: </strong>S/.
                    {{ (totalParcial = (total - totalIgv).toFixed(2)) }}
                  </v-col>
                  <v-col
                    align="right"
                    style="padding-top: 0px; padding-bottom: 0px"
                  >
                    <strong>Igv : </strong>S/.
                    {{ (totalIgv = ((total * igv) / (100 + igv)).toFixed(2)) }}
                  </v-col>
                  <v-col align="right" style="padding-top: 0px">
                    <strong>Total Neto: </strong>S/.
                    {{ (total = calcularTotal.toFixed(2)) }}
                  </v-col>
                </v-flex>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-btn @click="ocultarNuevo()" color="blue darken-1"
                    >Cancelar</v-btn
                  >
                  <v-btn v-if="verDet == 0" :disabled="!valida" @click="guardar()" color="success"
                    >Guardar</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
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
      compras: [],
      dialog: false,
      headers: [
        { text: "Usuario", value: "usuario" },
        { text: "Proveedor", value: "proveedor" },
        {
          text: "Serie Comprobante",
          value: "serieComprobante",
          sortable: false,
        },
        {
          text: "Número Comprobante",
          value: "numeroComprobante",
          sortable: false,
        },
        { text: "Fecha", value: "fecha", sortable: false },
        { text: "Igv", value: "igv", sortable: false },
        { text: "Total", value: "total", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false },
      ],
      cabeceraDetalles: [
        { text: "Borrar", value: "borrar", sortable: false },
        { text: "Producto", value: "producto", sortable: false },
        { text: "Cantidad", value: "cantidad", sortable: false },
        { text: "Precio", value: "precio", sortable: false },
        { text: "Subtotal", value: "subtotal", sortable: false },
      ],
      detalles: [],
      search: "",
      searchProductos: "",
      id: "",
      idProveedor: "",
      proveedores: [],
      serieComprobante: "",
      numeroComprobante: "",
      igv: 18,
      codigo: "",
      verNuevo: 0,
      totalParcial: 0,
      totalIgv: 0,
      total: 0,
      productos: [],
      cabeceraProductos: [
        { text: "Seleccionar", value: "seleccionar", sortable: false },
        { text: "Producto", value: "nombre" },
        { text: "Codigo", value: "codigo" },
        { text: "Categoría", value: "categoria" },
        { text: "Descripción", value: "descripcion" },
        { text: "Stock", value: "stock", sortable: false },
        { text: "Precio Venta", value: "precioVenta" },
      ],
      texto: "",
      verProductos: 0,
      verDet: 0,
      valida: 0,
      validaMensaje: [],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: "",
      valida: true,
      requiredRules: [
        v => !!v || 'Debe llenar este campo',
      ],
      numerocRules:[
        v => !!v || 'Debe llenar este campo',
        v => /^\d+$/.test(v) || 'Debe ingresar un nuemero de comprobante válido'
      ]
    };
  },
  computed: {
    calcularTotal: function () {
      var resultado = 0.0;
      for (var i = 0; i < this.detalles.length; i++) {
        resultado =
          resultado + this.detalles[i].precio * this.detalles[i].cantidad;
      }
      return resultado;
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
    this.listarProducto();
  },
  methods: {
    mostrarNuevo() {
      this.verNuevo = 1;
    },
    ocultarNuevo() {
      this.verNuevo = 0;
      this.limpiar();
    },
    buscarCodigo() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Productos/BuscarPorCodigo/" + this.codigo, configuracion)
        .then(function (response) {
          me.agregarDetalle(response.data);
        })
        .catch(function (error) {
          me.$swal("El producto no existe");
        });
    },
    listarProducto() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Productos/Listar", configuracion)
        .then(function (response) {
          me.productos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    mostrarProductos() {
      this.verProductos = 1;
    },
    ocultarProductos() {
      this.verProductos = 0;
    },
    agregarDetalle(data = []) {
      if (this.encuentra(data["idProducto"])) {
        this.$swal("El producto ya ha sido agregado");
      } else {
        this.detalles.push({
          idProducto: data["idProducto"],
          producto: data["nombre"],
          cantidad: 1,
          precio: 1,
        });
      }
    },
    encuentra(id) {
      var sw = 0;
      for (var i = 0; i < this.detalles.length; i++) {
        if (this.detalles[i].idProducto == id) {
          sw = 1;
        }
      }
      return sw;
    },
    eliminarDetalle(arr, item) {
      var i = arr.indexOf(item);
      if (i !== -1) {
        arr.splice(i, 1);
      }
    },
    listar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Compras/Listar", configuracion)
        .then(function (response) {
          //console.log(response);
          me.compras = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    listarDetalles(id) {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Compras/ListarDetalles/" + id, configuracion)
        .then(function (response) {
          me.detalles = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    verDetalles(item) {
      this.limpiar();
      this.serieComprobante = item.serieComprobante;
      this.numeroComprobante = item.numeroComprobante;
      this.idProveedor = item.idProveedor;
      this.igv = item.igv;
      this.listarDetalles(item.idCompra);
      this.verNuevo = 1;
      this.verDet = 1;
    },
    select() {
      let me = this;
      var proveedoresArray = [];
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Proveedores/SelectProveedores", configuracion)
        .then(function (response) {
          proveedoresArray = response.data;
          proveedoresArray.map(function (x) {
            me.proveedores.push({ text: x.nombre, value: x.idProveedor });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    limpiar() {
      this.id = "";
      this.valida = true,
      this.idProveedor = "";
      this.serieComprobante = "";
      this.numeroComprobante = "";
      this.igv = "18";
      this.codigo = "";
      this.detalles = [];
      this.total = 0;
      this.totalImpuesto = 0;
      this.totalParcial = 0;
      this.verDet = 0;
    },
    guardar() {
      if (this.$refs.form.validate()) {
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      let me = this;
      axios
        .post(
          "api/Compras/Crear",
          {
            idProveedor: me.idProveedor,
            idUsuario: me.$store.state.usuario.idUsuario,
            serieComprobante: me.serieComprobante,
            numeroComprobante: me.numeroComprobante,
            igv: me.igv,
            total: me.total,
            detalles: me.detalles,
          },
          configuracion
        )
        .then(function (response) {
          me.ocultarNuevo();
          me.listar();
          me.limpiar();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    activarDesactivarMostrar(accion, item) {
      this.adModal = 1;
      this.adNombre = item.numeroComprobante;
      this.adId = item.idCompra;
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
    desactivar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("api/Compras/Anular/" + this.adId, {}, configuracion)
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
