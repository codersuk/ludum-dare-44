var stone_width = 20;
var stone_height = 20;

Crafty.c(STONE, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - stone_width, 
             w: stone_width, 
             h: stone_height})
		this.color('#A8A8A8');
    },
    
});

