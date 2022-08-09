<template>

</template>

<script>
import router from "@/router";

export default {
  name: "ConcertComponent",
  methods:{
    openConcert(concert){
      let concertId = concert.id;
      router.push({name: 'single concert', params: {id: concertId}})
    }
  }
}
</script>

<style scoped>

</style>