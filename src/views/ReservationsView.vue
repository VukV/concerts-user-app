<template>
  <div>
    <TitleComponent title="My Reservations" description="View and manage your reservations"></TitleComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";

export default {
  name: 'ReservationsView',
  components: {
    TitleComponent
  }
}
</script>
