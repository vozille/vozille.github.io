<template>
    <!-- timeline card template -->
  <div>
      <h2 style="text-align:center">
        Timeline
      </h2>

      <div class="timeline-main" v-for="(item, idx) in timeline" v-bind:key='idx'>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="timeline-heading">
              {{item.Title}}
            </div>
          </div>
          <div class="row">
            <div class="timeline-sub-heading-1">
              {{item.Organisation}}
            </div>
          </div>
          <div class="row">
            <div class="timeline-sub-heading-2" v-if="item.EndDate">
              {{Moment(item.StartDate).format('YYYY-MMM')}} - {{Moment(item.EndDate).format('YYYY-MMM')}}
            </div>
            <div class="timeline-sub-heading-2" v-else>
              {{Moment(item.StartDate).format('YYYY-MMM')}} - Present
            </div>
          </div>
          <div class="row">
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
</template>

<script>
var moment = require("moment");
export default {
  name: "Timeline",
  created: function() {},
  data() {
    return {
      timeline: [
        {
          StartDate: "2017-06-01",
          EndDate: null,
          Organisation: "NowFloats",
          Title: "Software Engineer",
          ShowActivity: false,
          Activities: [
            "Member of the core back-end team, responsible for creation, deployment and optimization of API's and services",
            "Built partner management system using Vue, .Net Core , MongoDB and PostgreSQL. Features included purchasing and redeeming products, automated commissions as well as renewal and revenue cohorts",
            "Built a customer engagement platform for sales using AWS, MongoDB and Vue. This led to a 50% increase in renewal rates",
            "Modularisation and Migration of core API's to dotnet core and AWS ECS and lambda, which lead to 70% reduction in hosting costs"
          ]
        },
        {
          StartDate: "2013-07-01",
          EndDate: "2017-05-15",
          Organisation: "CETB",
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
@import "~bootstrap/scss/bootstrap";
</style>

