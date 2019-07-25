<template>
  <div>
    <section class="d-flex flex-column" id="external">
      <h2>Profiles</h2>
      <div class="col-md-12">
        <button
          class="btn button-github"
          v-on:click="OpenExternalLinkInNewTab('https://github.com/vozille')"
        >
          <i class="fab fa-github"></i> Github
        </button>
        <button
          class="btn button-linkedin"
          v-on:click="OpenExternalLinkInNewTab('https://www.linkedin.com/in/anwesh-mohanty-497031aa');"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </button>
        <button
          class="btn"
          v-on:click="OpenExternalLinkInNewTab('https://drive.google.com/open?id=1599vxf-Kjo44g3rAxddokiR1emJ0GG-z');"
        >
          <i class="fa fa-download"></i> Resume
        </button>
      </div>
    </section>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div class="my-auto">
        <div class="subheading mb-3">Programming Languages</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <div>C#</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-python"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-java"></i>
          </li>
        </ul>
        <div class="subheading mb-3">Frameworks</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-vuejs"></i>
          </li>
          <li class="list-inline-item">
            <div>.NET</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-sass"></i>
          </li>
        </ul>
        <div class="subheading mb-3">Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-git"></i>
          </li>
          <li class="list-inline-item">
            <div>Mongo</div>
          </li>
          <li class="list-inline-item">
            <div>SQL</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-docker"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-aws"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-linux"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-windows"></i>
          </li>
        </ul>
      </div>
    </section>
    <timeline></timeline>
  </div>
</template>

<script>
import "bootstrap";
import timeline from "@/components/Timeline";
import { basic_utilities } from "../js/Mixins.js";
export default {
  components: {
    timeline
  },
  created: function() {
    var header = $("body");
    header.css(
      "background-image",
      'url("https://raw.githubusercontent.com/vozille/vozille.github.io/production/src/assets/hire-me-bg.jpg")'
    );
  },
  mixins: [basic_utilities]
};
</script>

<style lang="scss" scoped>
@import "../scss/SkillSet.scss";
</style>
