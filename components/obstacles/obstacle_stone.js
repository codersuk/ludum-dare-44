var stone_width = 64;
var stone_height = 64;
// TODO: check stone dimensions
Crafty.c(STONE, {
	init : function () {
		this.requires('2D, DOM, stone, Obstacle, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH/2 +  GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - stone_height,
             w: stone_width, 
             h: stone_height})
		;
    },
    
});

