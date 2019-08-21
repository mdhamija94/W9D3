const View = require("./ttt-view.js");
const Game = require("./game.js");

  $(() => {
    let game = new Game();
    let view = new View(game, $(".ttt"));
  });
