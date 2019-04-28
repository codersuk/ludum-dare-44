//Loading the Game
Crafty.defineScene("Loading", function() {
    Crafty.background("#AAA");

    var loadingBox = Crafty.e('2D, DOM, Color')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.7, w: GAME_SCREEN_WIDTH * 0.6, h: 100})
        .color('#234c6a')
        .css('box-shadow', '0 2px 4px 0 rgba(0,0,0,0.46)');
    ;

    Crafty.e("2D, DOM, Text, HUD")
          .attr({w: 350, h: 100, x: 450, y: 750})
          .fixedPosition(GAME_SCREEN_WIDTH /2 - 130, 300)
          .text("Loading...")
          .textFont({ size: '40px', weight: 'bold' })
          .css('text-shadow', '3px 3px 3px black')
          .textColor('#EEE')
          .unselectable()

    // Game Assets would be a list of images, but this tutorial doesn't use them.
    // var gameAssets = {}; // defined already in assets.js

  	Crafty.load(gameAssets, function(){
        setTimeout(function () {
          Crafty.scene('Start');
        }, 300)
        // console.log(gameAssets);
         //  Load the first scene here


    },  function () {
      // console.log("Crafty Load Issue");
    },  function (e) {
      // console.log("Crafty Load Error", e);
    });
  });