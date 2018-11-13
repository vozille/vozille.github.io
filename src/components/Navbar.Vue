<template>
    <div class="navbar-div">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-on:click="$router.push('/skills')">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>

<!-- <div class="navbar-tab">
            <div class="navbar-tab-border-cells" v-on:click="$router.push('/')">
                Home
            </div>
            <div class="navbar-tab-interior-cells" v-on:click="$router.push('/timeline')">
                Timeline
            </div>
            <div class="navbar-tab-border-cells" v-on:click="$router.push('/blog')">
                Blog
            </div>
        </div> -->

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
// @import "../scss/Navbar.scss";
</style>