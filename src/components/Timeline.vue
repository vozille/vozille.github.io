<template>
    <!-- timeline card template -->
  <div>
      <div v-for="(item, idx) in timeline" v-bind:key='idx'>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-8 timeline-heading">
              {{item.Title}}
            </div>
            <div class="col-md-4 timeline-heading" v-if="item.EndDate">
              {{Moment(item.StartDate).format('YYYY-MMM')}} - {{Moment(item.EndDate).format('YYYY-MMM')}}
            </div>
            <div class="col-md-4 timeline-heading" v-else>
              {{Moment(item.StartDate).format('YYYY-MMM')}} - Present
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <ul class="timeline">
                <li v-for="(activity,idx2) in item.Activities" v-bind:key="idx2">
                  <transition name="list">
                    <p>{{activity}}</p>
                  </transition>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  name: "Timeline",
  created: function() {
    this.AddActivity();
  },
  data() {
    return {
      timeline: [
        {
          StartDate: "2017-06-01",
          EndDate: null,
          Title: "Software Engineer",
          ShowActivity: false,
          Activities: [
            "Worked as backend engineer",
            "Worked as front end engineer",
            "Worked as ops",
            "Worked as data entry operator",
            "Worked as cloud engineer"
          ]
        },
        {
          StartDate: "2013-07-01",
          EndDate: "2017-05-15",
          Title: "Aspiring Engineer",
          ShowActivity: false,
          Activities: [
            "Studied as mechanical engineer during the day",
            "Studied as computer science engineer during the night"
          ]
        }
      ]
    };
  },
  methods: {
    Moment: function(data) {
      return moment(data);
    },
    AddActivity: function() {
      this.timeline[0].Activities.push("foo");
    },
    ShowActivity: function(idx) {
      this.timeline[idx].ShowActivity = true;
    }
  },
  props: {
    limit: Number
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/Timeline.scss";
@import "./node_modules/bootstrap/scss/bootstrap.scss";
</style>

