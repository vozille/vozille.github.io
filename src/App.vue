<template>
  <div>
    <div>
      <navbar-side></navbar-side>
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
    "navbar-side": navbar
  }
};
</script>

<style lang="scss">
@import "./scss/App.scss";
</style>
