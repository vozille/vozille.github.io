<template>
  <div>
    <s>Hi sweetheart, I was too lazy to make this page. Click to: </s>
    <div>
      <a style="color:white" href=""><s>Send a Hi on Instagram</s></a>
    </div>
    Update: Married to the most beautiful woman in the world.
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

