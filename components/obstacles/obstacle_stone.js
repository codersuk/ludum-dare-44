var stone_width = 64;
var stone_height = 64;
// TODO check stone dimensions
Crafty.c(STONE, {
	init : function () {
		this.requires('2D, DOM, stone, Obstacle, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - stone_width, 
             w: stone_width, 
             h: stone_height})
		;
    },
    
});

