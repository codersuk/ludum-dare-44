var speed_width = 25;
var speed_height = 15;

Crafty.c(SPEED, {
	init : function () {
		this.requires('2D, DOM, Color, Power')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - speed_height * 3, 
             w: speed_width, 
             h: speed_height})
        this.color('#ffa500 ');
	},
});

