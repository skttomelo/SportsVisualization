<template>
  <modal
    name="match-stats"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="80%"
    height="auto"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <div class="size-modal-content">
      <h3>
        {{stats.event_away_team}}
        vs
        {{stats.event_home_team}}
      </h3>
      <div>{{stats.event_key}}</div>
      <h4 style></h4>
    </div>
  </modal>
</template>
<script>
export default {
  name: "soccerStats",
  data() {
    return {};
  },
  props: ["stats"],
  methods: {
    beforeOpen() {},
    beforeClose() {}
  }
};
</script>
<style>
.size-modal-content {
  display: grid;
  padding: 10px;
  font-style: 13px;
}
.v--modal-overlay[data-modal="size-modal"] {
  background: rgba(0, 0, 0, 0.45);
}
.demo-modal-class {
  border-radius: 5px;
  background: #f7f7f7;
  box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
}
</style>