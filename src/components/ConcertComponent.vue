<template>
  <div class="container single-concert">
    <div class="row align-items-center">
      <div class="col-md-3 d-flex justify-content-center">
        <h3>{{ concert.bandName }}</h3>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>{{ concert.venueName }}</h6>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>{{ concert.date }}</h6>
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <h6>{{ concert.time }}</h6>
      </div>
      <div class="col-md-3 d-flex justify-content-center">
        <button class="btn btn-outline-danger" @click="openConcert(concert)">GET TICKETS</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "ConcertComponent",
  props:{
    concert: Object
  },
  methods:{
    openConcert(concert){
      let concertId = concert.id;
      router.push({name: 'single concert', params: {id: concertId}})
    }
  }
}
</script>

<style scoped>
  .single-concert{
    padding: 20px;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    border-radius: 20px;
    margin-bottom: 30px;
  }

  h3, h6{
    margin: 0px;
  }
</style>