<template>
    <div>
      <div class="info">
        {{heading}}
      </div>
      <div v-on:click="toggle_data()">
        {{description}}
      </div>
      <div v-if="show_more_data">
        {{additional_data}}
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionCards",
  created: function() {},
  data() {
    return {
      show_more_data: false
    };
  },
  methods: {
    toggle_data: function() {
      this.show_more_data = !this.show_more_data;
    }
  },
  props: {
    heading: String,
    description: String,
    additional_data: String
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/Home.scss";
</style>

