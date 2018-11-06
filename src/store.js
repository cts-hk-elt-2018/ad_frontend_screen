import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const award = {
  state: {
    currentAward: "",
    awardees: []
  },
  mutations: {
    RESET(state) {
      state.currentAward = "";
      state.awardees = [];
    },
    SOCKET_AWARD_CURRENT_AWARD(state, currentAward) {
      if (state.currentAward != currentAward) {
        state.currentAward = currentAward;
        state.awardees = [];
      }
    },
    SOCKET_AWARD_AWARDEES(state, awardees) {
      state.awardees = awardees;
    }
  }
};

const game = {
  state: {
    currentQuestion: {
      question: ""
    },
    response: []
  },
  mutations: {
    RESET(state) {
      state.currentQuestion = "";
      state.responses = [];
    },
    SOCKET_GAME_EMPTY_RESPONSES(state) {
      state.responses = [];
    },
    SOCKET_GAME_CURRENT_QUESTION(state, currentQuestion) {
      if (state.currentQuestion != currentQuestion) {
        state.currentQuestion = currentQuestion;
        state.responses = [];
      }
    },
    SOCKET_GAME_ADD_RESPONSE(state, addedResponse) {
      state.responses.push(addedResponse);
    }
  }
};

const luckyDraw = {
  state: {
    currentGift: {
      name: "Guess what?",
      imageUrl: ""
    },
    winners: []
  },
  mutations: {
    RESET(state) {
      state.currentGift.name = "Guess what?";
      state.currentGift.imageUrl = "";
      state.winners = [];
    },
    SOCKET_LUCKYDRAW_EMPTY_WINNERS(state) {
      state.winners = [];
    },
    SOCKET_LUCKYDRAW_CURRENT_GIFT(state, currentGift) {
      if (state.currentGift.id != currentGift.id) {
        state.currentGift = currentGift;
        state.winners = [];
      }
    },
    SOCKET_LUCKYDRAW_REMOVE_WINNERS(state, removedWinnersId) {
      removedWinnersId.forEach(removedWinnerId => {
        state.winners.forEach(winner => {
          if (removedWinnerId == winner.id) {
            winner.status = "removed";
          }
        });
      });
      state.winners.forEach(winner => {
        if (winner.status == "new") {
          winner.status = "existing";
        }
      });
    },
    SOCKET_LUCKYDRAW_ADD_WINNERS(state, addedWinners) {
      state.winners.forEach(winner => {
        if (winner.status == "new") {
          winner.status = "existing";
        }
      });
      addedWinners.forEach(addedWinner => {
        addedWinner.status = "new";
        state.winners.push(addedWinner);
      });
    }
  }
};

const playVideo = {
  state: {
    status: "stop",
    messages: []
  },
  mutations: {
    SOCKET_PLAYVIDEO_STATUS(state, status) {
      state.status = status;
    },
    SOCKET_PLAYVIDEO_REMOVE_MESSAGES(state, removedMessagesId) {
      removedMessagesId.forEach(removedMessageId => {
        state.messages.forEach((message, index) => {
          if (removedMessageId == message.id) {
            state.messages.splice(index, 1);
          }
        });
      });
    }
  }
};

const main = {
  state: {
    isConnected: false,
    currentPage: "",
    announcements: [],
    announcements_enabled: true
  },
  mutations: {
    SOCKET_CONNECT(state) {
      state.isConnected = true;
    },
    CHANGE_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    }
  },
  actions: {
    socket_currentPage(context, currentPage) {
      if (context.state.currentPage != currentPage) {
        context.commit("CHANGE_CURRENT_PAGE", currentPage);
        context.commit("RESET");
      }
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
