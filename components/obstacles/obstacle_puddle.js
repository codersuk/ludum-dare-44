
var puddle_width = 85;
var puddle_height = 10;
//Slows the dragon

Crafty.c(PUDDLE, {
	init : function () {
		this.requires('2D, DOM, puddle, Obstacle')
        this.attr({x: (GAME_SCREEN_WIDTH + GhostPlayer.x),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - puddle_height, 
             w: puddle_width, 
             h: puddle_height});
	},
});

