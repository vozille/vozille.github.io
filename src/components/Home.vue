<template>
  <div>
    <div class="container-fluid">
      <section class="introduction">
        <div class="my-auto">
          <h1 class="mb-0">Anwesh Mohanty</h1>
          <div class="subheading mb-5">Software Enginner, Musician, Forever Curious</div>

          <!-- <div class="social-icons">
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import cards from "@/components/DescriptionCards";
export default {
  name: "Home",
  created: function() {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    show_more_data: function() {
      this.show_more_data = true;
    }
  },
  components: {
    cards: cards
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/Home.scss";
</style>

