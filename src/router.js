import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Award from "./views/Award.vue";
import Game from "./views/Game.vue";
import LuckyDraw from "./views/LuckyDraw.vue";
import PlayVideo from "./views/PlayVideo.vue";
import ThankYou from "./views/ThankYou.vue";
import BackDrop from "./views/BackDrop.vue";
import AroundTheWorld from "./views/AroundTheWorld.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/backdrop",
      name: "backdrop",
      component: BackDrop
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
    },
    {
      path: "/thank_you",
      name: "thank_you",
      component: ThankYou
    },
    {
      path: "/around_the_world",
      name: "around_the_world",
      component: AroundTheWorld
    }
  ]
});
