import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Soccer from "./components/Soccer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/soccer",
      name: "soccer",
      component: Soccer
    }
  ]
});
