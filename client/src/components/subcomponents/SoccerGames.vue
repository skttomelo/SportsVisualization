<template>
  <div>
    <h1>Soccer</h1>
    <div class="container">
      <div v-if="loading" style="grid-column:2; justify-self: center;">
        <img src="../../assets/30.gif" />
      </div>
      <div v-if="!loading" class="selector">
        <div class="date">asd</div>
        <span># of Games</span>
        <hr />
        <select v-model="selected">
          <option disabled value>Select Amount</option>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
      <div class="mcontainer">
        <div class="card" v-bind:key="i.event_key" v-for="i in data.slice(0,selected)">
          <h4 style>
            {{i.event_away_team}}
            <br />vs
            <br />
            {{i.event_home_team}}
          </h4>
          <hr />
          <div
            style="  justify-content: center;
  align-items: center; font-size: 22px;"
          >({{i.event_final_result}})</div>

          <div style="grid-row: 2/3; grid-column: 1/4;">
            <hr />
            <button class="myButton" v-on:click="show(i)">Expand</button>
          </div>
        </div>

        <soccerStats v-bind:stats="id"></soccerStats>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import soccerStats from "../modals/soccerStats";
//import h337 from "heatmap.js";
export default {
  name: "SoccerGames",
  components: {
    soccerStats
  },
  data() {
    return {
      loading: false,
      error: null,
      data: [],
      selected: 5,
      id: 0
    };
  },
  methods: {
    //NOTE: I NEED TO FIGURE OUT HOW TO COMBINE THE INFORMATION I WANT TO CONTAIN IN THE MODAL
    show(num) {
      this.$modal.show("match-stats");
      this.id = num;
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  },
  async created() {
    this.loading = true;

    try {
      const data = await axios("/api/soccer/score");
      this.data = data.data.result;
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}
.mcontainer {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.card {
  border-radius: 10%;
  background: #e9e9e9;
  padding: 20px;
  text-align: center;
  text-shadow: none;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  font-family: "Oswald", Helvetica;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
  justify-content: center;
  align-items: center;
}

.card:hover {
  background-color: #eee;
  color: #555;
}
.selector {
  grid-column: 2;
  justify-self: end;
}
.myButton {
  -moz-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  -webkit-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  box-shadow: inset 0px 0px 0px 0px #54a3f7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #007dc1),
    color-stop(1, #0061a7)
  );
  background: -moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
  background-color: #007dc1;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  border: 3px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  padding: 7px 24px;
  text-decoration: none;
  text-shadow: 0px 2px 0px #154682;
}
.myButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #0061a7),
    color-stop(1, #007dc1)
  );
  background: -moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
  background-color: #0061a7;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>