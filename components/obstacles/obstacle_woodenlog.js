var woodenlog_width = 10;
var woodenlog_height = 64;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, Obstacle, Platform, woodenlog')
        this.attr({x: (GAME_SCREEN_WIDTH + player.x),
             y: 10 - GAME_SCREEN_HEIGHT - SINGLE_UNIT - woodenlog_height,
             w: woodenlog_width, 
             h: woodenlog_height})
		;

	},
});

