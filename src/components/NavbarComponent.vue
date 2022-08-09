<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <div class="container">
          <b-navbar-brand to="/concerts">94/20RN</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/concerts">Concerts</b-nav-item>
              <b-nav-item to="/my-reservations">My Reservations</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ms-auto">
              <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
              <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
              <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>

</style>
