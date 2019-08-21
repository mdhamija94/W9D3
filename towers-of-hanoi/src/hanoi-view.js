const HanoiGame = require("./game.js");

class View {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;
    this.currentTower = null;
    this.setupTowers();
    this.bindEvents();
    this.render();
  }

  bindEvents () {
    $("ul").on("click", (e) => {
      // debugger
      if (this.currentTower === null) {
        this.currentTower = e.currentTarget;
        // $(this.currentTower).toggleClass("selected");
      } else {
        if (!(this.game.move(parseInt(this.currentTower.id.slice(6)), parseInt(e.currentTarget.id.slice(6))))) {
          alert("invalid move!");      
        }
        this.currentTower = null;
        // $(this.currentTower).toggleClass("selected");
      }
      this.render();
    });
  }

  setupTowers () {
    for (let i = 0; i < 3; i++) {
      let $ul = $(`<ul id="tower-${i}">`);
      this.$el.append($ul);
      for (let j = 0; j < 3; j++) {
        let $li = $(`<li id="tower-${i}-level-${j}">`);
        $ul.append($li);
      }
    }
  }

  render () {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $currentLevel = $(`#tower-${i}-level-${j}`);
        if (this.game.towers[i][j] === null) {
          $currentLevel.removeClass();
          $currentLevel.addClass("no-disc");
        } else {
          $currentLevel.removeClass();
          $currentLevel.addClass(`disc-${this.game.towers[i][j]}`);
        }
      }      
    }
  }
}

module.exports = View;