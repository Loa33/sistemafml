<template>
  <v-container id="usuario" fluid tag="section">
    <base-v-component heading="Usuarios" link="acceso/usuarios" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Usuarios</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <v-row>
              <v-col>
                  <v-text-field class="text-xs-center" v-model="search" append-icon="mdi-magnify" label="Búsqueda" single-line hide-details></v-text-field>
              </v-col>
              <v-col>
                   <v-dialog v-model="dialog" max-width="500px">
                        <v-btn slot="activator" color="primary" dark class="mb-2" @click="dialog = true">Nuevo</v-btn>
                        <v-card>
                            <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="nombre" label="Nombre">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-select v-model="idRol"
                                    :items="roles" label="Rol">
                                    </v-select>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="dni" label="DNI">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="email" label="Email">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field type="password" v-model="password" label="Password">
                                    </v-text-field>
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
                                <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click.native="guardar">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="adModal" max-width="290">
                        <v-card>
                            <v-card-title class="headline" v-if="adAccion==1">¿Activar Item?</v-card-title>
                            <v-card-title class="headline" v-if="adAccion==2">¿Desactivar Item?</v-card-title>
                            <v-card-text>
                                Estás a punto de 
                                <span v-if="adAccion==1">Activar </span>
                                <span v-if="adAccion==2">Desactivar </span>
                                el ítem {{ adNombre }}
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
                :items="usuarios"
                :search="search"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    
                    <td>{{ props.item.nombre }}</td>
                    <td>{{ props.item.rol }}</td>
                    <td>{{ props.item.dni }}</td>
                    <td>{{ props.item.email }}</td>
                </template>
                <template v-slot:[`item.estado`]="{ item }">
                    <td>
                        <div v-if="item.estado==1">
                        <span class="blue--text">Activo</span>
                        </div>
                        <div v-else>
                        <span class="red--text">Inactivo</span>
                        </div>
                    </td>
                </template>
                <template v-slot:[`item.opciones`]="{ item }">
                        <v-icon
                        small
                        class="mr-2"
                        color="teal"
                        @click="editItem(item)"
                        >
                        mdi-pencil
                        </v-icon>
                        <template v-if="item.estado==1">
                            <v-icon
                            color="red"
                            small
                            @click="activarDesactivarMostrar(2,item)"
                            >
                            mdi-toggle-switch
                            </v-icon>
                        </template>
                        <template v-else>
                            <v-icon
                            small
                            color="blue"
                            @click="activarDesactivarMostrar(1,item)"
                            >
                            mdi-toggle-switch-off
                            </v-icon>
                        </template>
                </template>
                <template slot="no-data">
                </template>
            </v-data-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                usuarios:[],                
                dialog: false,
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Rol', value: 'rol' },
                    { text: 'DNI', value: 'dni', sortable: false  },
                    { text: 'Email', value: 'email', sortable: false  },
                    { text: 'Estado', value: 'estado', sortable: false  }, 
                    { text: 'Opciones', value: 'opciones', sortable: false }              
                ],
                search: '',
                editedIndex: -1,
                id: '',
                idRol:'',
                roles:[                   
                ],
                nombre:'',
                dni: '',
                email: '',
                password:'',
                actPassword:false,
                passwordAnt:'',
                valida: 0,
                validaMensaje:[],
                adModal: 0,
                adAccion: 0,
                adNombre: '',
                adId: ''             
            }
        },
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'Nuevo usuario' : 'Actualizar usuario'
            }
        },

        watch: {
            dialog (val) {
            val || this.close()
            }
        },

        created () {
            this.listar();
            this.select();
        },
        methods:{
            listar(){
                let me=this;
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion = {headers : header};
                axios.get('api/Usuarios/Listar', configuracion).then(function(response){
                    //console.log(response);
                    me.usuarios=response.data;
                }).catch(function(error){
                    console.log(error);
                });
            },
            select(){
                let me=this;
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion = {headers : header};
                var rolesArray=[];
                axios.get('api/Roles/Select', configuracion).then(function(response){
                    rolesArray=response.data;
                    rolesArray.map(function(x){
                        me.roles.push({text: x.nombre,value:x.idRol});
                    });
                }).catch(function(error){
                    console.log(error);
                });
            },
            editItem (item) {
                this.id=item.idUsuario;
                this.idRol=item.idRol;
                this.nombre=item.nombre;
                this.dni=item.dni;
                this.email=item.email;
                this.password=item.passwordHash;
                this.passwordAnt=item.passwordHash;
                this.editedIndex=1;
                this.dialog = true
            },
            close () {
                this.dialog = false;
                this.limpiar();
            },
            limpiar(){
                this.id="";
                this.idRol="";
                this.nombre="";
                this.dni="";
                this.email="";
                this.password="";
                this.passwordAnt="";
                this.actPassword=false;
                this.editedIndex=-1;
            },
            guardar () {
                if (this.validar()){
                    return;
                }
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion = {headers : header};
                if (this.editedIndex > -1) {
                    //Código para editar
                    //Código para guardar
                    let me=this;
                    if (me.password!=me.passwordAnt){
                        me.actPassword=true;
                    }
                    axios.put('api/Usuarios/Actualizar',{
                        'idUsuario':me.id,
                        'idRol':me.idRol,
                        'nombre':me.nombre,
                        'dni': me.dni,
                        'email':me.email,
                        'password':me.password,
                        'actPassword':me.actPassword                        
                    }, configuracion).then(function(response){
                        me.close();
                        me.listar();
                        me.limpiar();                        
                    }).catch(function(error){
                        console.log(error);
                    });
                } else {
                    //Código para guardar
                    let me=this;
                    axios.post('api/Usuarios/Crear',{
                        'idRol':me.idRol,
                        'nombre':me.nombre,
                        'dni': me.dni,
                        'email':me.email,
                        'password':me.password
                    }, configuracion).then(function(response){
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
                if (!this.idRol){
                    this.validaMensaje.push("Seleccione un rol.");
                }
                if (!this.dni){
                    this.validaMensaje.push("Seleccione un tipo documento.");
                }

                if (!this.email){
                    this.validaMensaje.push("Ingrese el email del usuario.");
                }
                if (!this.password){
                    this.validaMensaje.push("Ingrese el password del usuario.");
                }
                if (this.validaMensaje.length){
                    this.valida=1;
                }
                return this.valida;
            },
            activarDesactivarMostrar(accion,item){
                this.adModal=1;
                this.adNombre=item.nombre;
                this.adId=item.idUsuario;                
                if (accion==1){
                    this.adAccion=1;
                }
                else if (accion==2){
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
                let me=this;
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion = {headers : header};
                axios.put('api/Usuarios/Activar/'+this.adId,{}, configuracion).then(function(response){
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre="";
                    me.adId="";
                    me.listar();                       
                }).catch(function(error){
                    console.log(error);
                });
            },
            desactivar(){
                let me=this;
                let header={"Authorization" : "Bearer " + this.$store.state.token};
                let configuracion = {headers : header};
                axios.put('api/Usuarios/Desactivar/'+this.adId,{}, configuracion).then(function(response){
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre="";
                    me.adId="";
                    me.listar();                       
                }).catch(function(error){
                    console.log(error);
                });
            }
        }        
    }
</script>
