import Vue from "vue";
import Vuex from "vuex";
import { Howl } from "howler";

Vue.use(Vuex);

const award = {
  state: {
    currentAward: "",
    awardee: {
      lastName: "",
      firstName: "",
      staffID: ""
    }
  },
  mutations: {
    RESET(state) {
      state.currentAward = "";
      state.awardee = {
        lastName: "",
        firstName: "",
        staffID: ""
      };
    },
    SOCKET_AWARD_EMPTY_AWARDEE(state) {
      state.awardee = {
        lastName: "",
        firstName: "",
        staffID: ""
      };
    },
    SOCKET_AWARD_CURRENT_AWARD(state, currentAward) {
      if (state.currentAward != currentAward) {
        state.currentAward = currentAward;
        state.awardee = {
          lastName: "",
          firstName: "",
          staffID: ""
        };
      }
    },
    SOCKET_AWARD_AWARDEE(state, awardee) {
      console.log(awardee.User);
      state.awardee.lastName = awardee.User.lastName;
      state.awardee.firstName = awardee.User.firstName;
      state.awardee.staffID = awardee.User.username;
    }
  }
};

const game = {
  state: {
    currentQuestion: {
      question: "Guess what? Let's play tgt!"
    },
    responses: [],
    currentResponse: 0
  },
  mutations: {
    RESET(state) {
      state.currentQuestion = "";
      state.responses = [];
      state.currentResponse = 0;
    },
    SOCKET_GAME_EMPTY_RESPONSES(state) {
      state.responses = [];
      state.currentResponse = 0;
    },
    SOCKET_GAME_CURRENT_QUESTION(state, currentQuestion) {
      if (state.currentQuestion != currentQuestion) {
        state.currentQuestion = currentQuestion;
        state.responses = [];
      }
    },
    SOCKET_GAME_ADD_RESPONSE(state, addedResponse) {
      state.responses.push(addedResponse);
    },
    SOCKET_GAME_NEXT_RESPONSE(state) {
      if (state.currentResponse < state.responses.length - 1) {
        state.currentResponse += 1;
      } else {
        state.currentResponse = 0;
      }
    },
    SOCKET_GAME_PREVIOUS_RESPONSE(state) {
      if (state.currentResponse > 0) {
        state.currentResponse -= 1;
      } else {
        state.currentResponse = state.responses.length - 1;
      }
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
    },
    socket_playSound(context, soundId) {
      var sound = new Howl({
        src: [require("./assets/audio/" + soundId + ".mp3")]
      });
      sound.play();
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
