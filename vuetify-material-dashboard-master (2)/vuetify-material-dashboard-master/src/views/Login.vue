<template>
  <v-container
    id="Login"
    fluid
    tag="section" class="container fill-height justify-center"
  >
    <div class="col justify-center">
      <div class="row justify-center">
              <v-img src="@/assets/user.png" max-height="128" max-width="128" ></v-img>
            </div>
            <div class="row justify-center">
              <base-material-card color="#1c629e" max-width="100%" width="400" style="max-width: 100%; width: 400px; transform-origin: center top 0px;"> 
            
            <template v-slot:heading>
              
            <div class="display-2 font-weight-light" style="text-align:center !important">Acceso al Sistema</div>
            
            </template>
                <v-card-text>
                    <v-text-field  v-model="email" label="Email" required prepend-icon="mdi-account" >
                    </v-text-field>
                    <v-text-field v-model="password" type="password" label="Password" required prepend-icon="mdi-lock"> 
                    </v-text-field>
                    <v-flex class="red--text" v-if="error">
                        {{error}}
                    </v-flex>
                </v-card-text>
                <v-card-actions class="px-3 pb-3">
                    <div class="row justify-center">
                        <v-btn @click="ingresar" color="primary">Ingresar</v-btn>
                    </div>
                </v-card-actions>
        </base-material-card>
            </div>
        
    </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return {
      email:'',
      password: '',
      error: null
    }
  },
  methods :{
    ingresar(){
      this.error = null;
        axios.post('api/Usuarios/Login', {email: this.email, password:this.password})
        .then(respuesta => {
          return respuesta.data
        })
        .then(data => {
          this.$store.dispatch("guardarToken", data.token)
          this.$router.push({name: "Dashboard"})
        })
        .catch(err => {
          if(err.response.status ==400){
            this.error ="El email no es válido"
          } else if(err.response.status ==404){
            this.error = "Los datos no son válidos"
          }else{
            this.error = "No se puede acceder"
          }
          console.log(err)
        })
    }

  }
}
</script>