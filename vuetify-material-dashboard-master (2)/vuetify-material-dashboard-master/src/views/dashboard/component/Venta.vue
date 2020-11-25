<template>
  <v-container id="venta" fluid tag="section">
    <base-v-component heading="Ventas" link="/ventas" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Ventas</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>
            <v-row>
                <v-col>
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
                <v-col>
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
                                <td>{{ props.item.nombre }}</td>
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
                  <v-btn @click="ocultarProductos()" color="blue darken" flat>
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="adModal" max-width="290">
              <v-card>
                <v-card-title class="headline" v-if="adAccion == 1"
                  >¿Activar Item?</v-card-title
                >
                <v-card-title class="headline" v-if="adAccion == 2"
                  >¿Anular Venta?</v-card-title
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
            :items="ventas"
            :search="search"
            class="elevation-1"
            v-if="verNuevo == 0"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.usuario }}</td>
              <td>{{ props.item.documento }}</td>
              <td>{{ props.item.nombre }}</td>
              <td>{{ props.item.tipoComprobante }}</td>
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
            <template slot="no-data"> No hay registros para mostrar </template>
          </v-data-table>
          <v-container grid-list-sm class="pa-4 white" v-if="verNuevo">
            <v-form v-model="valida" ref="form" lazy-validation>
            <v-layout row wrap>
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-select
                  v-model="tipoComprobante"
                  :items="comprobantes"
                  label="Tipo Comprobante"
                  :rules="requiredRules"
                  v-on:change="agregarTipoDocumento()"
                >
                </v-select>
              </v-flex>
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-text-field
                  v-model="serieComprobante"
                  :rules="requiredRules"
                  label="Serie Comprobante"
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
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-text-field
                  v-model="tipoDocumento"
                  label="Tipo Documento"
                  disabled
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-text-field v-model="documento" label="Documento cliente" :rules="documentoRules">
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-text-field v-model="nombre" label="Nombre cliente" :rules="requiredRules">
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md4 lg4 xl4>
                <v-text-field type="number" v-model="igv" label="Igv">
                </v-text-field>
              </v-flex>
              <v-flex xs8 sm6 md6 lg6 xl6>
                <v-text-field
                  @keyup.enter="buscarCodigo()"
                  v-model="codigo"
                  label="Código"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs8 sm1 md2 lg2 xl2>
                <v-btn @click="mostrarProductos()" small fab dark color="teal">
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
                    <template v-slot:[`item.descuento`]="{ item }">
                      <td>
                        <v-text-field
                          type="number"
                          v-model="item.descuento"
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
                <v-flex class="text-xs-right">
                  <strong>Total Parcial: </strong>S/.
                  {{ (totalParcial = (total - totalImpuesto).toFixed(2)) }}
                </v-flex>
                <v-flex class="text-xs-right">
                  <strong>Igv: </strong>S/.
                  {{
                    (totalImpuesto = (
                      (total * igv) /
                      (100 + igv)
                    ).toFixed(2))
                  }}
                </v-flex>
                <v-flex class="text-xs-right">
                  <strong>Total Neto: </strong>S/.
                  {{ (total = calcularTotal.toFixed(2)) }}
                </v-flex>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-btn @click="ocultarNuevo()" color="blue darken-1" flat
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
      ventas: [],
      dialog: false,
      headers: [
        { text: "Usuario", value: "usuario" },
        { text: "Nombre cliente", value: "nombre" },
        { text: "Documento cliente", value: "documento" },
        { text: "Tipo Comprobante", value: "tipoComprobante" },
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
        { text: "Descuento", value: "descuento", sortable: false },
        { text: "Subtotal", value: "subtotal", sortable: false },
      ],
      detalles: [],
      search: "",
      searchProductos: "",
      id: "",
      tipoComprobante: "",
      comprobantes: ["Factura", "Boleta"],
      serieComprobante: "",
      documento: "",
      nombre: "",
      numeroComprobante: "",
      igv: 18,
      codigo: "",
      tipoDocumento: "",
      verNuevo: 0,
      errorArticulo: null,
      totalParcial: 0,
      totalImpuesto: 0,
      total: 0,
      productos: [],
      cabeceraProductos: [
        { text: "Seleccionar", value: "seleccionar", sortable: false },
        { text: "Producto", value: "nombre" },
        { text: "Categoría", value: "categoria" },
        { text: "Descripción", value: "descripcion", sortable: false },
        { text: "Stock", value: "stock", sortable: false },
        { text: "Precio Venta", value: "precioVenta", sortable: false },
      ],
      texto: "",
      verProductos: 0,
      verDet: 0,
      valida: true,
      validaMensaje: [],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: "",
      requiredRules: [
        v => !!v || 'Debe llenar este campo',
      ],
      numerocRules:[
        v => !!v || 'Debe llenar este campo',
        v => /^\d+$/.test(v) || 'Debe ingresar un nuemero de comprobante válido'
      ],
      documentoRules: [
        v => !!v || `Debe llenar este campo`,
        v => /^[0-9]$/.test(v) || 'Debe ingresar valores válidos'
      ],
    };
  },
  computed: {
    calcularTotal: function () {
      var resultado = 0.0;
      for (var i = 0; i < this.detalles.length; i++) {
        resultado =
          resultado +
          (this.detalles[i].precio * this.detalles[i].cantidad -
            this.detalles[i].descuento);
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
      me.errorArticulo = null;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("api/Productos/BuscarCodigoVenta/" + this.codigo, configuracion)
        .then(function (response) {
          //console.log(response);
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
    agregarTipoDocumento(){
        if(this.tipoComprobante=="Factura")
        {
            this.tipoDocumento="RUC";
        }else
        {
            this.tipoDocumento= "DNI"
        }
    },
    agregarDetalle(data = []) {
      if (this.encuentra(data["idProducto"])) {
        this.$swal("El producto ya ha sido agregado");
      } else {
        this.detalles.push({
          idProducto: data["idProducto"],
          producto: data["nombre"],
          cantidad: 1,
          precio: data["precioVenta"],
          descuento: 0,
        });
        console.log(data["idProducto"]);
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
        .get("api/Ventas/Listar", configuracion)
        .then(function (response) {
          //console.log(response);
          me.ventas = response.data;
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
        .get("api/Ventas/ListarDetalles/" + id, configuracion)
        .then(function (response) {
          me.detalles = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    verDetalles(item) {
      this.limpiar();
      this.tipoComprobante = item.tipoComprobante;
      this.serieComprobante = item.serieComprobante;
      this.agregarTipoDocumento();
      this.numeroComprobante = item.numeroComprobante;
      this.documento = item.documento;
      this.nombre = item.nombre;
      this.igv = item.igv;
      this.listarDetalles(item.idVenta);
      this.verNuevo = 1;
      this.verDet = 1;
    },
    limpiar() {
      this.id = "";
      this.valida = true,
      this.documento = "";
      this.nombre = "";
      this.tipoComprobante = "";
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
      console.log("detalles: "+me.detalles.data)
      console.log("detalles: "+me.detalles.idProducto)
      axios.post("api/Ventas/Crear",{
            'documento': me.documento,
            'nombre': me.nombre,
            'idUsuario': me.$store.state.usuario.idUsuario,
            'tipoComprobante': me.tipoComprobante,
            'serieComprobante': me.serieComprobante,
            'numeroComprobante': me.numeroComprobante,
            'igv': me.igv,
            'total': me.total,
            'detalles': me.detalles,
          }, configuracion).then(function (response) {
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
      this.adId = item.idVenta;
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
    /*
            activar(){
                let me=this;
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion= {headers : header};
                axios.put('api/Usuarios/Activar/'+this.adId,{},configuracion).then(function(response){
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre="";
                    me.adId="";
                    me.listar();                       
                }).catch(function(error){
                    console.log(error);
                });
            },
            */
    desactivar() {
      let me = this;
      let header = { Authorization: "Bearer " + this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("api/Ventas/Anular/" + this.adId, {}, configuracion)
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
