import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const urlCrud = 'http://localhost:8081/admin';
const urlAuth = 'http://localhost:8082/auth'

export default new Vuex.Store({
  state: {
      concerts: [],
      concertsPaginated: [],
      reservations: [],
      token: '',
      currentConcert: Object
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

      addConcerts(state, concerts) {
          this.state.concerts = concerts;
          this.state.concertsPaginated = concerts.slice(0, 5)
      },

      setNewPagination(state, currentPage){
          this.state.concertsPaginated = this.state.concerts.slice((currentPage - 1) * 5, currentPage * 5);
      },

      addReservations(state, reservations) {
          this.state.reservations = reservations;
      },

      makeReservation(state, res){
        this.state.reservations.push(res);
      },

      cancelReservation(state, resId){
          for(let i = 0; i < this.state.reservations.length; i++){
              if(this.state.reservations[i].id === resId){
                  this.state.reservations.splice(i, 1);
              }
          }
      },

      setCurrentConcert(state, concert){
          this.state.currentConcert = concert;
      }
  },
  actions: {
      register({ commit }, obj){
          fetch(urlAuth + '/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(obj)
          }).then( res => res.json())
              .then( tkn => {
                if(tkn.message){
                  alert(tkn.message);
                }
                else {
                  commit('setToken', tkn.token);
                }
              });
      },


      login({ commit }, obj){
          fetch(urlAuth + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
          }).then( res => res.json())
              .then(tkn => {
                  if(tkn.message){
                      alert(tkn.message);
                  }
                  else {
                      commit('setToken', tkn.token);
                  }
              });
          },

      fetchConcerts({commit}){
        fetch(urlCrud + '/concerts')
            .then(response => response.json())
            .then(res => commit('addConcerts', res));
        },

      fetchReservations({commit, state}){
        fetch(urlCrud + '/my-reservations', {
            headers: { 'Authorization': `Bearer ${state.token}` }
        }).then(res => res.json())
            .then(response => {
                if(response.message){
                    alert("You need to login.");
                }
                else{
                    commit('addReservations', response);
                }
            });
        },

      makeReservation({commit, state}, obj){
          fetch(urlCrud + '/make-reservation', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${state.token}`
              },
              body: JSON.stringify(obj)
          })
              .then(res => res.json())
              .then(response => {
                  if(response.message){
                      alert(response.message);
                  }
                  else {
                      commit('makeReservation', response);
                      alert("Reservation made!");
                  }
              })
      },

      cancelReservation({commit, state}, obj){
        fetch(urlCrud + '/cancel-reservation', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.token}`
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(response => {
                if(response.message){
                    alert(response.message);
                }
                else {
                    commit('cancelReservation', obj.id);
                }
            });
      },

      fetchConcert({commit}, concertId){
        fetch(urlCrud + '/concert/' + concertId)
            .then(result => result.json())
            .then(concert => {
                commit('setCurrentConcert', concert);
            });
      }
  }

})