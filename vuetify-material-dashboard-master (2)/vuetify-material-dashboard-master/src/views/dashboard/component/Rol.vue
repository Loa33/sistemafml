<template>
  <v-container id="rol" fluid tag="section">
    <base-v-component heading="Roles" link="acceso/roles" />

    <v-row>
      <v-col cols="12">
        <base-material-card color="#1c629e">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Roles</div>
            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <v-row>
              <v-col>
                  <v-text-field class="text-xs-center" v-model="search" append-icon="mdi-magnify" label="Búsqueda" single-line hide-details></v-text-field>
              </v-col>
          </v-row>
          <v-data-table
                :headers="headers"
                :items="roles"
                :search="search"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">                    
                    <td>{{ props.item.nombre }}</td>
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
                roles:[],                
                dialog: false,
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Estado', value: 'estado', sortable: false  }                
                ],
                search: ''             
            }
        },
        computed: {
        },

        watch: {
        },

        created () {
            this.listar();
        },
        methods:{
            listar(){
                let me=this;
                axios.get('api/Roles/Listar').then(function(response){
                    me.roles=response.data;
                }).catch(function(error){
                    console.log(error);
                });
            }
        }        
    }
</script>