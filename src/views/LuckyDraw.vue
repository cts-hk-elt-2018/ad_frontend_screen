<template>
  <div class="lucky_draw">
    <div class="gift-photo" :style="{'order': giftId % 2 }" v-if="winners.length == 0">
      <div class="winner-prize-image">
        <img class="prize-img" :src="imageUrl" />
      </div>
    </div>
    <div class="gift-detail" :style="{'order': (giftId + 1) % 2 }" v-if="winners.length == 0">
      <h1 v-html="giftName"></h1>
      <h2>{{ giftPrice }}</h2>
    </div>
    <div class="draw-animation" v-if="animationOn">
      <lottie :options="lottieOptions" :height="650" :width="700" v-on:animCreated="handleAnimation"/>
      <h3>and the lucky draw winner is ...</h3>
    </div>
    <div class="winner-prize" :style="{'order': giftId % 2 }" v-if="resultOn">
      <div class="winner-prize-image">
        <img class="prize-img" :src="imageUrl" />
      </div>
      <h1 v-html="giftName"></h1>
      <h2>{{ giftPrice }}</h2>
    </div>
    <div class="winner" :style="{'order': (giftId + 1) % 2 }" v-if="resultOn">
      <div class="winner-header">
        <h1>Winners!</h1>
      </div>
      <div class="winner-list">
        <p v-for="winner in winners" :key="winner.id" :class="winner.status">{{ winner.username }} - {{ winner.firstName }} {{ winner.lastName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie";
import * as animationData from "@/assets/luckyDraw.json";
import { Howl } from "howler";
export default {
  components: {
    lottie
  },
  data() {
    return {
      lottieOptions: {
        animationData: animationData.default
      },
      animationOn: false,
      resultOn: false
    };
  },
  mounted() {
    this.$store.watch(
      () => {
        return this.$store.state.luckyDraw.winners;
      },
      winners => {
        if (winners.length > 0) {
          this.animationOn = true;
          this.resultOn = false;
          var sound = new Howl({
            src: [require("../assets/audio/4.mp3")]
          });
          sound.play();
          setTimeout(() => {
            this.animationOn = false;
            this.resultOn = true;
          }, 5000);
        }
      },
      {
        deep: true
      }
    );
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  },
  computed: {
    giftName() {
      return this.$store.state.luckyDraw.currentGift.name;
    },
    giftPrice() {
      return this.$store.state.luckyDraw.currentGift.price;
    },
    giftId() {
      return this.$store.state.luckyDraw.currentGift.id;
    },
    imageUrl() {
      return this.$store.state.luckyDraw.currentGift.imageUrl;
    },
    winners() {
      return this.$store.state.luckyDraw.winners;
    }
  }
};
</script>

<style>
h1 {
  font-size: 40pt;
  padding: 15px;
  font-family: "TT Norms";
  font-weight: 800;
  font-style: normal;
}
h2 {
  font-size: 30pt;
  /*padding: 15px;*/
  font-family: "TT Norms";
  font-weight: bold;
  font-style: normal;
}
h3 {
  font-size: 30pt;
  padding: 15px;
  font-family: "TT Norms";
  font-weight: 100;
  font-style: italic;
}
.lucky_draw {
  height: 100vh;
  color: white;
  background: #0033a0;
  display: flex;
}
.gift-photo {
  height: 100vh;
  width: 50vw;
  background: white;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.draw-animation {
  height: 100vh;
  width: 100vw;
}
.gift-detail {
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.winner {
  /*border-left: solid 1px white;*/
  height: 100vh;
  width: 50vw;
  /*background: white;*/
  font-family: "TT Norms";
  font-weight: bold;
  font-style: normal;
  font-size: 30px;
  line-height: 1.7em;
}
.winner-prize {
  height: 100vh;
  width: 50vw;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
}
.winner-prize-image {
  justify-content: center;
  align-content: center;
  text-align: center;
}
.winner-prize > img {
  max-height: 50vh;
}
.winner-header {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
}
.winner-list {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
}
.new {
  /*color: lightgreen;*/
  /*text-decoration: underline;*/
}
.existing {
  color: grey;
}
.removed {
  display: none;
}
.prize-img {
  max-width: 45vw;
  max-height: 90vh;
}
</style>
