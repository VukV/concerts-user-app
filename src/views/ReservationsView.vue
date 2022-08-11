<template>
  <div>
    <TitleComponent title="My Reservations" description="View and manage your reservations"></TitleComponent>

    <div v-if="!token" class="container">
      <h4 class="login-info">You are not logged in.</h4>
    </div>
    <div v-else class="container">
      <div v-if="!(reservations.length > 0)">
        <h6>You have no reservations.</h6>
      </div>
      <div v-for="res in reservations" :key="res.id">
        <ReservationComponent :reservation="res"></ReservationComponent>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import {mapActions, mapState} from "vuex";
import ReservationComponent from "@/components/ReservationComponent";

export default {
  name: 'ReservationsView',
  components: {
    ReservationComponent,
    TitleComponent
  },
  computed:{
    ...mapState([
        'token',
        'reservations'
    ])
  },
  methods:{
    ...mapActions([
        'fetchReservations'
    ])
  },
  mounted() {
    if(this.token){
      this.fetchReservations();
    }
  }
}
</script>

<style>
  .login-info{
    color: crimson;
  }
</style>