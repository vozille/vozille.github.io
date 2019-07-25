<template>
  <div>
    <div>
      <navbar-top></navbar-top>
    </div>
    <div id="app" class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import "bootstrap";
export default {
  name: "App",
  components: {
    "navbar-top": navbar
  }
};
</script>

<style lang="scss">
@import "./scss/App.scss";
</style>
