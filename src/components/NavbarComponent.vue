<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <div class="container">
          <b-navbar-brand to="/concerts">94/20RN</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/concerts">Concerts</b-nav-item>
              <b-nav-item to="/my-reservations">My Reservations</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ms-auto">
              <b-nav-item v-if="!getToken" to="/register">Register</b-nav-item>
              <b-nav-item v-if="!getToken" to="/login">Log In</b-nav-item>
              <b-nav-item v-else @click="logout">Log Out</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  name: 'NavbarComponent',
  computed:{
    getToken(){
      return this.$store.state.token;
    }
  },
  mounted() {
    if(localStorage.token){
      this.setToken(localStorage.token);
    }
  },
  methods:{
    ...mapMutations([
        'removeToken',
        'setToken'
    ]),

    logout(){
      this.removeToken();
    }
  }
}
</script>

<style scoped>

</style>
