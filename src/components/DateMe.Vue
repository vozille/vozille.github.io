<template>
  <div>
    Hi sweetheart, I was too lazy to make this page. Click to:
    <div>
      <a style="color:white" href="https://www.instagram.com/__anwesh__/">Send a Hi on Instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Date-me",
  created: function() {
    var header = $("body");
    header.css(
      "background-image",
      'url("https://raw.githubusercontent.com/vozille/vozille.github.io/production/src/assets/date.jpg")'
    );
  }
};
</script>

