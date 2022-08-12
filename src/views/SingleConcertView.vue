<template>
  <div class="container concert-info">
    <div class="row">
      <div class="col-md-12 text-center">
        <h3>{{ currentConcert.bandName }}</h3>
        <h4>{{ currentConcert.venueName }}</h4>
        <h6>{{ currentConcert.date }}</h6>
        <h6>{{ currentConcert.time }}</h6>

        <br>
        <h5 class="blue-h5">Available tickets: {{ currentConcert.ticketsNumber }}</h5>
        <br>

        <h4>Number of tickets:</h4>
        <input v-model="ticketsNumber" type="number" placeholder="Number of tickets">
        <br><br>
        <button class="btn btn-primary" @click="makeRes">Make Reservation</button>
      </div>
    </div>

  </div>
</template>

<script>

import {mapState, mapActions} from "vuex";

export default {
  name: "SingleConcertView",
  data() {
    return {
      concertId: 0,
      ticketsNumber: 1
    }
  },
  computed:{
    ...mapState([
        'currentConcert',
        'token'
    ])
  },
  methods:{
    ...mapActions([
        'fetchConcert',
        'makeReservation'
    ]),

    makeRes(){
      if(this.concertId !== 0){
        let newRes = {
          concertId: this.concertId,
          ticketsNumber: this.ticketsNumber
        }

        console.log("stigao do socketa");
        //this.makeReservation(newRes);
        this.$socket.emit('new_reservation', {body: newRes, token: this.token});
      }
    }
  },
  created() {
    let concertId = this.$route.params.id;
    this.concertId = concertId;
    this.fetchConcert(concertId);
  }
}
</script>

<style scoped>
  .concert-info{
    margin: 30px;
  }

  .blue-h5{
    margin-top: 20px;
    color: dodgerblue;
  }
</style>