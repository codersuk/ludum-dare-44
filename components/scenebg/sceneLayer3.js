var widthOfImage = 2508;
var heightOfImage = 400;
Crafty.c("sceneLayer3", {
    init: function () {
        this.requires('2D, DOM, Image,Motion');
        //1300 is the width of the image


        this.attr({x: 0, y: GAME_SCREEN_HEIGHT - heightOfImage, w: widthOfImage *1, h: heightOfImage});
        this.image("images/background/BG2.png", "repeat-x");
        this.vx -= 100;


    },


});

