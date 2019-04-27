var fire_width = 15;
var fire_height = 7;

Crafty.c("Fire", {
	init : function () {
		this.requires('2D, DOM, Color, Collision')
        this.attr({x: (GAME_SCREEN_WIDTH - 50),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: fire_width, 
             h: fire_height})
		this.color('#FFA500');
	},
});

