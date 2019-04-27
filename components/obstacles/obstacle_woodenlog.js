var woodenlog_width = 100;
var woodenlog_height = 32;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, woodenlog, Obstacle, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + player.x + 100),
             y: GAME_SCREEN_HEIGHT - woodenlog_width - woodenlog_height,
             w: woodenlog_width,
             h: woodenlog_height})
		;
	},
});

