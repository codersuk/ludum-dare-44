var widthOfImage = 2508;
var heightOfImage = 400;
Crafty.c("sceneLayer1", {
    init: function () {
        this.requires('2D, DOM, Image, Motion');
        //1300 is the width of the image

        this.attr({x: 0, y: 0, w: widthOfImage * 100, h: heightOfImage});
        this.image("images/background/BG4.png", "repeat-x");
        this.vx -= 15;


    },
    events: {
        "UpdateFrame": function () {
            //repeat screen until the end of time
            if (this.x <= -(widthOfImage)) {
                this.x = 0;
                // console.log('setup backgou')
            }
        }
    }

});

