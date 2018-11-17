<template>
  <div class="game">
    <div class="header">
      <h1 v-html="question"></h1>
    </div>
    <div class="content">
      <carousel :per-page="1" :navigate-to="currentResponseIndex" :mouse-drag="false" :loop="true" :centerMode="true" :paginationEnabled="true">
        <slide v-for="(response, index) in responses" :key="'response' + index" >
          <div class="response" :style="{'background-image': 'url(' + response.imageUrl + ')'}">
            <img :src="response.imageUrl" style="visibility: hidden;" />
            <h2 class="game-caption">No. {{ index + 1 }} <br> Table {{ response.groupName }} - {{ response.uploadTime }}</h2>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "game",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        slidesToShow: 1,
        arrows: false
      }
    };
  },
  computed: {
    question() {
      return this.$store.state.game.currentQuestion.question;
    },
    currentResponseIndex() {
      return this.$store.state.game.currentResponse;
    },
    responses() {
      return this.$store.state.game.responses;
    }
  }
};
</script>

<style lang="scss">
.header {
  height: 19vh;
}
.content {
  height: 80vh;
}
.game {
  height: 100vh;
  color: white;
  background: #0033a0;
}
h1 {
  font-size: 40pt;
  padding: 15px;
  font-family: "TT Norms";
  font-weight: 800;
  font-style: normal;
}
.response {
  float: left;
  border-radius: 5em;
  overflow: hidden;
  height: 72vh;
  background-size: cover;
  position: relative;
}
.game-caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(0, 0, 0, 0.75);
  padding: 4px 8px;
  color: white;
  margin: 0;
  font: 24px Sans-Serif;
  font-family: "TT Norms";
  font-weight: 500;
  font-style: italic;
}
.active {
  border-color: red;
  border-width: 5px;
  border-style: solid;
}
</style>
