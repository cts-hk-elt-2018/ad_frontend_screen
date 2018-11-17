<template>
  <div class="aroundtheworld">
    <div>
      <div class="lottie">
        <lottie :options="lottieOptions" :height="350" :width="350" v-on:animCreated="handleAnimation"/>
      </div>
      <img class="middle-logo" src="../assets/cognizant_logo_white.png" />
      <h1>Around the world</h1>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie";
import * as animationData from "@/assets/aroundTheWorld.json";
export default {
  components: {
    lottie
  },
  data() {
    return {
      lottieOptions: {
        animationData: animationData.default
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>
<style lang="scss">
.aroundtheworld {
  background: #0033a0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: -50px;
    font-size: 40pt;
    font-family: "TT Norms";
    font-weight: 400;
    font-style: normal;
    color: white;
  }
}
.lottie {
  margin-top: -20px;
}
.middle-logo {
  margin-top: -90px;
  width: 60vw;
}

.inner-part {
  // display: block;
}
</style>
