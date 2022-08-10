<template>
  <div class="container">
    <br>
    <input type="text" placeholder="username" id="username-register">
    <br><br>
    <input type="email" placeholder="email" id="email-register">
    <br><br>
    <input type="password" placeholder="password" id="password-register">
    <br><br>
    <button class="btn btn-outline-warning" @click="onRegister">Register</button>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "RegisterView",
  methods:{
    ...mapActions([
        "register"
    ]),

    onRegister(){
      let username = document.getElementById('username-register').value;
      let email = document.getElementById('email-register').value;
      let password = document.getElementById('password-register').value;

      console.log(username + email + password);

      if(username && email && password){
        let registerInfo = {
          username: username,
          email: email,
          password: password
        }

        this.register(registerInfo);
        this.$router.push({name: 'concerts'});
      }
    }
  }
}
</script>

<style scoped>

</style>