type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

const state = {
  data: {
    currentGame: { computerPlay: "", myPlay: "" },
    history: [{}],
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay;
  },

  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history(play);
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const gane: boolean =
      (myPlay == "tijera" && computerPlay == "papel") ||
      (myPlay == "piedra" && computerPlay == "tijera") ||
      (myPlay == "papel" && computerPlay == "piedra");
  },
};
