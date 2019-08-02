<template>
  <div>
    <section class="flex-column" id="skills">
      <div>
        <div class="subheading">I've worked with</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <div>C#</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-python"></i>
          </li>
          <li class="list-inline-item">
            <div>Scala</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-java"></i>
          </li>
        </ul>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-git"></i>
          </li>
          <li class="list-inline-item">
            <div>MongoDB</div>
          </li>
          <li class="list-inline-item">
            <div>Redis</div>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-aws"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-docker"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-linux"></i>
          </li>
          <li class="list-inline-item">
            <div>SQL</div>
          </li>
        </ul>
        <div class="subheading">I have worked at</div>
        <div>
          <h4>Joveo: Software engineer in the core backend team.</h4>
          <p>My role was to scale and optimise existing trading and event pipelines.</p>
          <p>We also developed an orchestraion layer for the large number of batch jobs</p>
        </div>
        <br />
        <div>
          <h4>Nowfloats: Full stack engineer</h4>
          <p>Worked mostly writing API's as well as handling end to end internal dashboard for the 1000+ sales team.</p>
          <p>Worked on the core API team</p>
        </div>
      </div>
    </section>
    <!-- <timeline></timeline> -->
    <footer id="sticky-footer">
      <h5>Check me out on</h5>
      <div class="container text-center">
        <section class="d-flex" id="external">
          <div class="col-md-4">
            <button
              class="btn button-github"
              v-on:click="OpenExternalLinkInNewTab('https://github.com/vozille')"
            >
              <i class="fab fa-github"></i> Github
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn button-linkedin"
              v-on:click="OpenExternalLinkInNewTab('https://www.linkedin.com/in/anwesh-mohanty-497031aa');"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn button-resume"
              v-on:click="OpenExternalLinkInNewTab('https://drive.google.com/open?id=1599vxf-Kjo44g3rAxddokiR1emJ0GG-z');"
            >
              <i class="fa fa-download"></i> Resume
            </button>
          </div>
        </section>
      </div>
    </footer>
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
      'url("https://raw.githubusercontent.com/vozille/vozille.github.io/production/src/assets/background-2.jpeg")'
    );
  },
  mixins: [basic_utilities]
};
</script>

<style lang="scss" scoped>
@import "../scss/SkillSet.scss";
</style>
