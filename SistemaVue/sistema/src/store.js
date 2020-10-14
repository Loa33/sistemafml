import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null
  }
  
})
