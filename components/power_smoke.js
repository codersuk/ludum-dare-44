var smoke_width = 5;
var smoke_height = SINGLE_UNIT;

Crafty.c("Smoke", {
	init : function () {
		this.requires('2D, DOM, Color, Collision')
        this.attr({x: (GAME_SCREEN_WIDTH - 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: smoke_width, 
             h: smoke_height})
		this.color('#FFA500');
	},
});

