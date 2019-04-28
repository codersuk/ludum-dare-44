var widthOfImage = 2508;
var heightOfImage = 400;
Crafty.c("sceneLayer4", {
    init: function () {
        this.requires('2D, DOM, Image,Motion');
        //1300 is the width of the image


        this.attr({x: 0, y: 35, w: widthOfImage * 100, h: heightOfImage});
        this.image("images/background/BG1.png", "repeat-x");
        // this.vx -= MOVE_RIGHT_RATE_PLAYER * 2;


    },


});

