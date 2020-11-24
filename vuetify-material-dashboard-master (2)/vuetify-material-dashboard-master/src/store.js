import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .4), rgba(0, 0, 0, 1)',
    barImage: 'https://previews.123rf.com/images/leaf/leaf1508/leaf150800532/44323995-medicines-arranged-in-shelves-at-pharmacy.jpg',
    drawer: null,
    token:null,
    usuario:null
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    setToken(state,token){
      state.token=token
    },
    setUsuario(state,usuario){
      state.usuario=usuario  
    }
  },
  actions: {
    guardarToken({commit},token){
      commit("setToken", token)
      commit("setUsuario", decode(token))
      localStorage.setItem("token", token)
    },
    autoLogin({commit}){
      let token = localStorage.getItem("token")
      if (token){
        commit("setToken", token)
        commit("setUsuario", decode(token))
      }
      router.push({name: 'Dashboard'})
    },
    salir({commit}){
      commit("setToken", null)
      commit("setUsuario", null)
      localStorage.removeItem("token")
      router.push({name: 'Login'})
    }
  }
})
