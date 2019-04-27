var stone_width = 10;
var stone_height = 10;

Crafty.c("Stone", {
	init : function () {
		this.requires('2D, DOM, Color, Collision')
        this.attr({x: (GAME_SCREEN_WIDTH - 75),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - stone_width, 
             w: stone_width, 
             h: stone_height})
		this.color('#A8A8A8');
	},
});

