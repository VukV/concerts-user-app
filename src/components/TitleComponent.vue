<template>
  <div class="container">
    <div id="title-div">
      <h2>{{ title }}</h2>
      <h5>{{ description }}</h5>
    </div>
  </div>

</template>

<script>
export default {
  name: "TitleComponent",
  props:{
    title: String,
    description: String
  }
}
</script>

<style scoped>
#title-div{
  margin-top: 1.2em;
  margin-bottom: 2em;
}
</style>