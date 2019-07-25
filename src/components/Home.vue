<template>
  <div>
    <div class="container-fluid">
      <section class="introduction">
        <div class="my-auto">
          <h1 class="mb-0">Anwesh Mohanty</h1>
          <div class="subheading mb-5">Software Enginner, Musician, Forever Curious</div>
        </div>
        <div id="typed-strings">
          <p>
            I am kinda obsessed with
            <strong>Food</strong>.
          </p>
          <p>
            I've learnt
            <em>scala</em> ..
            somehow
          </p>
          <p>
            I play ..
            <b>tabla</b>
          </p>
          <p>
            In a love hate relationship with ..
            <em>mongo-db</em>
          </p>
          <p>
            The fact that the future is a distopya,
            makes me appreciate how blessed I am,
            right now
          </p>
          <p>
            I love being around people,
            <em>smarter than me</em>
          </p>
          <p>
            Inspirations are everywhere.
            You just need to change,
            the way you look at things
          </p>
          <p>
            I love statically typed languages,
            python still has my heart though
          </p>
          <p>
            The passion of every person,
            has always left me
            in awe
          </p>
          <p>
            I am a backend engineer,
            who can write passable front end,
            and do devops occasionally.
          </p>
        </div>
        <span id="typed"></span>
      </section>
    </div>
  </div>
</template>

<script>
import cards from "@/components/DescriptionCards";
import Typed from "typed.js";
export default {
  name: "Home",
  created: function() {
    var header = $("body");
    header.css(
      "background-image",
      'url("https://raw.githubusercontent.com/vozille/vozille.github.io/production/src/assets/wallpaper.png")'
    );
  },
  mounted: function() {
    var options = {
      stringsElement: "#typed-strings",
      typeSpeed: 30,
      loop: true,
      fadeOut: true,
      showCursor: false
    };

    var typed = new Typed("#typed", options);
  },
  data() {
    return {};
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

