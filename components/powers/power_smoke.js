var smoke_width = 5;
var smoke_height = SINGLE_UNIT;

Crafty.c(SMOKE, {
	init : function () {
		this.requires('2D, DOM, Color, Power')
        this.attr({x: (GAME_SCREEN_WIDTH + player.x),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: smoke_width, 
             h: smoke_height})
		this.color('#FFA500');
	},
});

