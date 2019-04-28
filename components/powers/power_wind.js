var wind_width = 64;
var wind_height = 64;

//TODO: power up for wind is to give the character double jump
Crafty.c("Wind", {
	init : function () {
		this.requires('2D, DOM, wind, Collision')
        this.attr({x: (GAME_SCREEN_WIDTH - 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: wind_width, 
             h: wind_height})
		;
	},
});

