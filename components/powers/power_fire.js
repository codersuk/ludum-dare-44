var fire_width = 32;
var fire_height = 32;

Crafty.c(FIRE, {
	init : function () {
		this.requires('2D, DOM, Color, Power')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: fire_width, 
             h: fire_height})
		this.color('#FFA500');
	},
});

