var woodenlog_width = 100;
var woodenlog_height = 25;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, Color, Obstacle, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH + GhostPlayer.x),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - woodenlog_height, 
             w: SINGLE_UNIT, 
             h: woodenlog_height})
		this.color('#654321');
	},
});

