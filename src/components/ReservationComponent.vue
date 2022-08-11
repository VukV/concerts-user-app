<template>
  <div class="container single-reservation">
    <div class="row align-items-center">
      <div class="col-md-4 d-flex justify-content-center">
        <h5>Date: {{ reservation.concertDate }}, Time: {{ reservation.concertTime }}</h5>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>Tickets No: {{ reservation.ticketsNumber }}</h6>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>Total Price: {{ reservation.totalPrice }}</h6>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>Valid Until: {{ reservation.validUntil }}</h6>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <button class="btn btn-outline-danger" @click="cancelReservation(reservation)">CANCEL</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationComponent",
  props:{
    reservation: Object
  },
  methods:{
    cancelReservation(reservation){
      console.log(reservation);
    }
  }
}
</script>

<style scoped>
  .single-reservation{
    padding: 20px;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    border-radius: 20px;
    margin-bottom: 30px;
  }

  h5, h6{
    margin: 0px;
  }
</style>