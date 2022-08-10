<template>
  <div class="container concert-info">
    <div class="row">
      <div class="col-md-6">
        <h3>{{ currentConcert.bandName }}</h3>
        <h4>{{ currentConcert.venueName }}</h4>
        <h6>{{ currentConcert.date }}</h6>
        <h6>{{ currentConcert.time }}</h6>
      </div>
      <div class="col-md-6 d-flex justify-content-center">

      </div>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from "vuex";

export default {
  name: "SingleConcertView",
  computed:{
    ...mapState([
        'currentConcert'
    ])
  },
  methods:{
    ...mapActions([
        'fetchConcert'
    ])
  },
  created() {
    let concertId = this.$route.params.id;
    this.fetchConcert(concertId);
  }
}
</script>

<style scoped>
  .concert-info{
    margin: 30px;
  }
</style>