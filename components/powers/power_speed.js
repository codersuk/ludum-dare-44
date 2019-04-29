var speed_width = 64;
var speed_height = 64;

Crafty.c(SPEED, {
	init : function () {
		this.requires('2D, DOM, powerup, Power')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - speed_height * 3  - (Math.random() * 200 - 100), 
             w: speed_width, 
             h: speed_height})
	},
});

