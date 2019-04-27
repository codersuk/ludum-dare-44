var stone_width = 10;
var stone_height = 10;

Crafty.c(STONE, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - stone_width, 
             w: stone_width, 
             h: stone_height})
		this.color('#A8A8A8');
    },
    
});

