<template>
  <v-container
    id="Login"
    fluid
    tag="section"
  >
    <v-row>
      <v-col xs12 sm8 md6 lg5 xl4 >
        <base-material-card color="#1c629e">
            <template v-slot:heading>
            <div class="display-2 font-weight-light">Acceso al Sistema</div>
            </template>
                <v-card-text>
                    <v-text-field  v-model="email" label="Email" required>
                    </v-text-field>
                    <v-text-field v-model="password" type="password" label="Password" required>
                    </v-text-field>
                    <v-flex class="red--text" v-if="error">
                        {{error}}
                    </v-flex>
                </v-card-text>
                <v-card-actions class="px-3 pb-3">
                    <v-flex text-xs-right>
                        <v-btn @click="ingresar" color="primary">Ingresar</v-btn>
                    </v-flex>
                </v-card-actions>
        </base-material-card>
      </v-col>
    </v-row>
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