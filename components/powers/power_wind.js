var wind_width = SINGLE_UNIT;
var wind_height = SINGLE_UNIT;

Crafty.c("Wind", {
	init : function () {
		this.requires('2D, DOM, Color, Collision')
        this.attr({x: (GAME_SCREEN_WIDTH - 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: wind_width, 
             h: wind_height})
		this.color('#FFA500');
	},
});

