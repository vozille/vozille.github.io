<template>
  <div class="navbar-div">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-transparent">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link clickable" v-on:click="$router.push('/')">Home</a>
          <a class="nav-link clickable" v-on:click="$router.push('/hireme')">Hire Me</a>
          <a class="nav-link clickable" v-on:click="$router.push('/dateme')">Date Me</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap.scss";
@import "../scss/Navbar.scss";
</style>