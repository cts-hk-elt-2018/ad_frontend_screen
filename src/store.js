import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const award = {
  state: {
    currentAward: null,
    awardees: []
  }
};

const game = {
  state: {
    question: null,
    response: []
  }
};

const luckyDraw = {
  state: {
    currentGift: null,
    winners: []
  }
};

const playVideo = {
  state: {
    status: "stop",
    messages: []
  }
};

const main = {
  state: {
    isConnected: false,
    currentPage: "play_video",
    announcements: [],
    announcements_enabled: true
  },
  mutations: {
    SOCKET_CONNECT(state) {
      state.isConnected = true;
    },
    SOCKET_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    }
  }
};

export default new Vuex.Store({
  modules: {
    award,
    game,
    luckyDraw,
    playVideo,
    main
  }
});
