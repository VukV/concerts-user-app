import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const urlCrud = 'http://localhost:8081/admin';
const urlAuth = 'http://localhost:8082/admin'

export default new Vuex.Store({
  state: {
    concerts: [],
    reservations: [],
    token: ''
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    addConcerts(state, concerts){
      this.state.concerts = concerts;
    },

    addReservations(state, reservations){
      this.state.reservations = reservations;
    }
  },
  actions: {
    register({commit}, obj){
      this.$axios.post(urlAuth + '/register', {
        username: obj.username,
        password: obj.password,
        email: obj.email
      }).then(response => {
        commit('setToken', response.data.token);
      })
    },

    login({commit}, obj){
      this.$axios.post(urlAuth + '/login', {
        username: obj.username,
        password: obj.password
      }).then(response => {
        if(response.data.message){
          alert(response.data.message);
        }
        else {
          commit('setToken', response.data.token);
        }
      })
    },

    fetchConcerts({commit}){
      this.$axios.get(urlCrud + '/concerts')
          .then(response => {
            commit('addConcerts', response.data)
          })
    },

    fetchReservations({commit}){
      this.$axios.get(urlCrud + '/my-reservations')
          .then(response => {
            if(response.message){
              alert("You need to login.");
            }
            else{
              commit('addReservations', response.data);
            }
          })
    }
  }
})
