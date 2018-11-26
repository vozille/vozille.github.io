<template>
  <div>
    <div class="container-fluid">

      <section class="introduction" id="about">
        <div class="my-auto">
          <h1 class="mb-0">
            Anwesh Mohanty
          </h1>
          <div class="subheading mb-5">Silicon Valley, Madhapur, Hyderabad
            <a href="mailto:anwesh063@gmail.com">anwesh063@gmail.com</a>
          </div>
          <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div class="social-icons">
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
          </div>
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

