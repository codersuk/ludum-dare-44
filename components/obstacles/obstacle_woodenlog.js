var woodenlog_width = 64;
var woodenlog_height = 64;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle, Platform, woodenlog')
        this.attr({x: (GAME_SCREEN_WIDTH + player.x),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - woodenlog_height, 
             w: woodenlog_width, 
             h: woodenlog_height})
		this.color('#654321');
	},
});

