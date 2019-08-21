class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", (e) => {
      let $li = $(e.currentTarget);
      this.makeMove($li);
      if (this.game.isOver()) {
        this.$wintext.text(`Congratulations, ${this.game.winner().toUpperCase()}!`);
        Array.from($(".ttt>ul>li")).forEach((square) => {
          $(square).addClass("clicked");
        });
      }
    });
  }

  makeMove($square) {
    if (!(this.game.isOver())) {
      let inputText = this.game.currentPlayer;
      this.game.playMove([$square.data("row"), $square.data("col")]);
      if (inputText === "x") {
        $square.toggleClass("x");
      } else {
        $square.toggleClass("o");
      }
      $square.text(inputText);
      $square.toggleClass("clicked");
      this.game.board.print();
    }
  }

  setupBoard() {
    let $ul = $("<ul>");
    this.$el.append($ul);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $(`<li data-row=${i} data-col=${j}>`);
        $ul.append($li);
      }
    }
    this.$wintext = $("<div class='wintext'>");
    this.$el.append(this.$wintext);
  }
}

module.exports = View;
