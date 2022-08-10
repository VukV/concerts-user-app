<template>
  <div>
    <TitleComponent title="Concerts" description="Find all concerts in one place!"></TitleComponent>

    <div v-for="c in concerts" :key="c.id">
      <ConcertComponent :concert="c"></ConcertComponent>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";
import {mapActions, mapState} from 'vuex'
import ConcertComponent from "@/components/ConcertComponent";

export default {
  name: 'ConcertsView',
  components: {
    ConcertComponent,
    TitleComponent
  },
  computed:{
    ...mapState([
        'concerts'
    ])
  },
  methods:{
    ...mapActions([
        'fetchConcerts'
    ])
  },
  mounted() {
    this.fetchConcerts();
  }
}
</script>
