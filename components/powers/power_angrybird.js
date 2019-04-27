var angry_width = 15;
var angry_height = 9;

Crafty.c(ANGRYBIRD, {
	init : function () {
		this.requires('2D, DOM, Color, Power')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x+ 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: angry_width, 
             h: angry_height})
        this.color('#ff0000');
	},
});

