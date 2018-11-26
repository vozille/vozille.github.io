<template>
    <div class="navbar-div">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Anwesh Mohanty</span>
        <span class="d-none d-lg-block">
          <img class="img-profile" src="https://scontent-sin6-1.cdninstagram.com/vp/b51791f732e2023370146f529d31ccfd/5C7252AC/t51.2885-15/e35/42116866_1632851330154845_8463874381676158446_n.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link clickable" v-on:click="$router.push('/')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link clickable" v-on:click="$router.push('/hireme')">Hire Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link clickable" v-on:click="$router.push('/dateme')">Date Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link clickable">Interests</a>
          </li>
        </ul>
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