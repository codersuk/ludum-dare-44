Crafty.c("Scene1BG", {
    init: function () {
        this.requires('2D, DOM, Image,Motion');
        //1300 is the width of the image
        widthOfImage = 1300
        this.attr({x: 0, y: 0, w: widthOfImage * 100, h: GAME_SCREEN_HEIGHT});
        this.image("images/sprites/seamless2.jpg", "repeat-x");
        this.vx -= 50;


    },
    events: {
        "UpdateFrame": function () {
            //repeat screen until the end of time
            if (this.x <= -(widthOfImage)) {
                this.x = 0;
            }
        }
    }

});

