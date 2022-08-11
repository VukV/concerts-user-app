<template>
  <div class="justify-content-center">
    <TitleComponent title="Concerts" description="Find all concerts in one place!"></TitleComponent>

    <div v-for="c in concertsPaginated" :key="c.id">
      <ConcertComponent :concert="c"></ConcertComponent>
    </div>

    <b-pagination v-model="currentPage" pills align="center" :total-rows="concerts.length" :per-page="perPage"></b-pagination>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import {mapActions, mapMutations, mapState} from 'vuex'
import ConcertComponent from "@/components/ConcertComponent";

export default {
  name: 'ConcertsView',
  components: {
    ConcertComponent,
    TitleComponent
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5
    }
  },
  watch:{
    currentPage(){
      this.setNewPagination(this.currentPage);
    }
  },
  computed:{
    ...mapState([
        'concerts',
        'concertsPaginated'
    ]),
  },
  methods:{
    ...mapActions([
        'fetchConcerts'
    ]),
    ...mapMutations([
        'setNewPagination'
    ])
  },
  mounted() {
    this.fetchConcerts();
  }
}
</script>
