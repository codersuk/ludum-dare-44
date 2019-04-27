var woodenlog_width = 100;
var woodenlog_height = 25;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - woodenlog_height, 
             w: woodenlog_width, 
             h: woodenlog_height})
		this.color('#654321');
	},
});

