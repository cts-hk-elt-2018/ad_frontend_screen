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
import LongServiceAward10Years01Intro from "./views/awards/LongServiceAward10Years01Intro.vue";
import LongServiceAward10Years02Awardees from "./views/awards/LongServiceAward10Years02Awardees.vue";
import LongServiceAward15Years01Intro from "./views/awards/LongServiceAward15Years01Intro.vue";
import LongServiceAward15Years02Awardees from "./views/awards/LongServiceAward15Years02Awardees.vue";
import AnnualAwardIntro from "./views/awards/AnnualAwardIntro.vue";
import RisingStar01Intro from "./views/awards/RisingStar01Intro.vue";
import RisingStar02Awardee from "./views/awards/RisingStar02Awardee.vue";
import AwardGoesTo from "./views/awards/AwardGoesTo.vue";
import AssociateOfTheYear01Intro from "./views/awards/AssociateOfTheYear01Intro.vue";
import AssociateOfTheYear02Candidates from "./views/awards/AssociateOfTheYear02Candidates.vue";
import AssociateOfTheYear03Awardees from "./views/awards/AssociateOfTheYear03Awardees.vue";
import ProjectOfTheYear01Intro from "./views/awards/ProjectOfTheYear01Intro.vue";
import ProjectOfTheYear02Awardee from "./views/awards/ProjectOfTheYear02Awardee.vue";
import BestCostumeAward from "./views/awards/BestCostumeAward.vue";

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
    },
    {
      path: "/award/lsa10_01",
      name: "award_lsa10_01",
      component: LongServiceAward10Years01Intro
    },
    {
      path: "/award/lsa10_02",
      name: "award_lsa10_02",
      component: LongServiceAward10Years02Awardees
    },
    {
      path: "/award/lsa15_01",
      name: "award_lsa15_01",
      component: LongServiceAward15Years01Intro
    },
    {
      path: "/award/lsa15_02",
      name: "award_lsa15_02",
      component: LongServiceAward15Years02Awardees
    },
    {
      path: "/award/annual",
      name: "award_annual",
      component: AnnualAwardIntro
    },
    {
      path: "/award/rising_01",
      name: "award_rising_01",
      component: RisingStar01Intro
    },
    {
      path: "/award/rising_02",
      name: "award_rising_02",
      component: RisingStar02Awardee
    },
    {
      path: "/award/goesto",
      name: "award_goesto",
      component: AwardGoesTo
    },
    {
      path: "/award/associate_01",
      name: "award_associate_01",
      component: AssociateOfTheYear01Intro
    },
    {
      path: "/award/associate_02",
      name: "award_associate_02",
      component: AssociateOfTheYear02Candidates
    },
    {
      path: "/award/associate_03",
      name: "award_associate_03",
      component: AssociateOfTheYear03Awardees
    },
    {
      path: "/award/project_01",
      name: "award_project_01",
      component: ProjectOfTheYear01Intro
    },
    {
      path: "/award/project_02",
      name: "award_project_02",
      component: ProjectOfTheYear02Awardee
    },
    {
      path: "/award/costume",
      name: "award_costume",
      component: BestCostumeAward
    }
  ]
});
