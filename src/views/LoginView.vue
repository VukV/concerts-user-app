<template>
  <div class="container">
    <br>
    <input type="text" placeholder="username" id="username-login">
    <br><br>
    <input type="password" placeholder="password" id="password-login">
    <br><br>
    <button class="btn btn-outline-primary" @click="onLogin">Login</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "LoginView",

  methods:{
    ...mapActions([
        "login"
    ]),

    onLogin(){
      let username = document.getElementById('username-login').value;
      let password = document.getElementById('password-login').value;

      if (username && password){
        let loginInfo = {
          username: username,
          password: password
        }

        this.login(loginInfo);
        this.$router.push({name: 'concerts'})
      }
      else {
       alert("All fields must be filled.")
      }
    }
  }
}
</script>

<style scoped>

</style>