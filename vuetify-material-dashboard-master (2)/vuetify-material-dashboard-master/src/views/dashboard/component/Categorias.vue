<template>
  <v-container id="categorias" fluid tag="section">
    <base-v-component heading="Categorias" link="almacen/categorias" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Categorias</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-row align="center" justify="center">
            <v-col cols="10">
              <v-text-field
                class="text-xs-center"
                v-model="search"
                append-icon="mdi-magnify"
                label="Búsqueda"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col align="center">
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
                        <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="nombre"
                            label="Nombre"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="descripcion"
                            label="Descripción"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 v-show="valida">
                          <div class="red--text" v-for="v in validaMensaje" :key="v" v-text="v">
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click.native="close"
                      >Cancelar</v-btn
                    >
                    <v-btn color="blue darken-1" text @click.native="guardar"
                      >Guardar</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="adModal" max-width="300">
                <v-card>
                     <v-card-title class="headline" v-if="adAccion==1">¿Activar Item?</v-card-title>
                    <v-card-title class="headline" v-if="adAccion==2">¿Desactivar Item?</v-card-title>
                    <v-card-text>
                      Estas a punto de 
                      <span v-if="adAccion==1">activar </span>
                      <span v-if="adAccion==2">desactivar</span>
                      el item {{ adNombre}}
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat="flat" @click="activarDesactivarCerrar">
                        Cancelar
                      </v-btn>
                      <v-btn v-if="adAccion==1" color="orange darken-4" flat="flat" @click="activar">
                        Activar
                      </v-btn>
                      <v-btn v-if="adAccion==2" color="orange darken-4" flat="flat" @click="desactivar">
                        Desactivar
                      </v-btn>
                    </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>

          <v-data-table
            :headers="headers"
            :items="categorias"
            :search="search"
            class="elevation-1"
          >
            <template v-slot="items" v-slot-scope="props">
              <td>{{ props.item.nombre }}</td>
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
                  <v-icon small class="mr-2" color="red" @click="activarDesactivar(2,item)">mdi-toggle-switch</v-icon>
                </template>
                <template v-else>
                    <v-icon small class="mr-2" color="blue" @click="activarDesactivar(1,item)">mdi-toggle-switch-off</v-icon>
                </template>
            </template>
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
      categorias: [],
      dialog: false,
      headers: [
        { text: "Nombre", value: "nombre" },
        { text: "Descripción", value: "descripcion" },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false },
      ],
      search: "",
      editedIndex: -1,
      id: 0,
      nombre: "",
      descripcion: "",
      valida: 0,
      validaMensaje:[],
      adModal: 0,
      adAccion: 0,
      adNombre: "",
      adId: 0
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nueva categoría"
        : "Actualizar categoría";
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
      axios
        .get("api/Categorias/ListarCategorias")
        .then(function (response) {
          //console.log(response);
          me.categorias = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editItem(item) {
      this.id=item.idCategoria;
      this.nombre=item.nombre;
      this.descripcion = item.descripcion;
      this.editedIndex=1;
      this.dialog=true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.valida=0;
      this.validaMensaje=[];
      this.limpiar();
      this.dialog = false;
    },
    limpiar() {
      this.id = "";
      this.nombre = "";
      this.descripcion = "";
      this.editedIndex=-1;
    },
    guardar(){
      if(this.validar()){
        return;
      }
      if(this.editedIndex > -1){
        let me = this;
        console.log(me.id);
          axios.put('api/Categorias/ActualizarCategoria', {
            'idCategoria': me.id,
            'nombre': me.nombre,
            'descripcion': me.descripcion
            
          }).then(function(response){
              me.close();
              me.listar();
              me.limpiar();
          }).catch(function(error){
            console.log(error);
          });
      }else {
          let me = this;
          axios.post('api/Categorias/CrearCategoria', {
            'nombre': me.nombre,
            'descripcion': me.descripcion
          }).then(function(response){
              me.close();
              me.listar();
              me.limpiar();
          }).catch(function(error){
            console.log(error);
          });
      }
    },
    validar(){
      this.valida=0;
      this.validaMensaje=[];
        if(this.nombre.length<3 || this.nombre.length>256){
          this.validaMensaje.push("El nombre debe tener entre 3 y 256 caractéres");
        }
        if(this.validaMensaje.length){
          this.valida=1;
        }
        return this.valida;
    },
    activarDesactivar(accion,item){
      this.adModal=1;
      this.adNombre=item.nombre;
      this.adId=item.idCategoria;
      console.log(item.idCategoria);
        if(accion==1){
          this.adAccion=1;
        }
        else if(accion==2){
          this.adAccion=2;
        }
        else{
          this.adModal=0;

        }
    },
    activarDesactivarCerrar(){
      this.adModal=0;
    },
    activar(){
      let me = this;
      axios.put('api/Categorias/ActivarCategoria/'+this.adId,{}).then(function(response){
        me.adModal=0;
        me.adAccion=0;
        me.adNombre="";
        me.adId=0;
        me.listar();
      }).catch(function(error){
        console.log(error);
      });

    },
    desactivar(){
      let me = this;
        axios.put('api/Categorias/DesactivarCategoria/'+this.adId,{}).then(function(response){
          me.adModal=0;
          me.adAccion=0;
          me.adNombre="";
          me.adId=0;
          me.listar();
        }).catch(function(error){
          console.log(error);
        });
    },
    
  },
};
</script>