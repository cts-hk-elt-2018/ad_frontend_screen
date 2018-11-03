import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Award from "./views/Award.vue";
import Game from "./views/Game.vue";
import LuckyDraw from "./views/LuckyDraw.vue";
import PlayVideo from "./views/PlayVideo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/award",
      name: "award",
      component: Award
    },
    {
      path: "/game",
      name: "game",
      component: Game
    },
    {
      path: "/lucky_draw",
      name: "lucky_draw",
      component: LuckyDraw
    },
    {
      path: "/play_video",
      name: "play_video",
      component: PlayVideo
    }
  ]
});
