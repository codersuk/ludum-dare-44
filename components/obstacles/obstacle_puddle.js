
var puddle_width = 85;
var puddle_height = 10;

Crafty.c(PUDDLE, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - puddle_width, 
             w: puddle_width, 
             h: puddle_height})
        this.color('#00ccff');
	},
});

