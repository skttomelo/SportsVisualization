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
    width="45%"
    height="auto"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <div class="size-modal-content">
      <table>
        <tr>
          <th><h3>{{stats.event_away_team}}</h3></th>
          <th><h3>vs</h3></th>
          <th>{{stats.event_home_team}}</th>
        </tr>
        <tr>
          <td>{{getTeam(stats.away_team_key).players[0]}}</td>
        </tr>
      </table>
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
  props: ["stats", "teams"],
  methods: {
    beforeOpen() {},
    beforeClose() {},
    getTeam(team_key) {
      let group;
      this.$props.teams.forEach((team) => {
        if(team.team_key == team_key){
          group = team;
          return;
        }
      });
      return group;
    }
  },
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