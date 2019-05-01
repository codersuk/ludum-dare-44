var woodenlog_width = 64;
var woodenlog_height = 64;

Crafty.c(WOODENLOG, {
	init : function () {
		this.requires('2D, DOM, Obstacle, Platform, woodenlog')
        this.attr({x: (GAME_SCREEN_WIDTH + GhostPlayer.x),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - 10 - woodenlog_height,  - (Math.random() * 10 - 10),
             w: woodenlog_width, 
             h: woodenlog_height})
        this.collision([0, 5, this.w, 5, this.w, this.h, 0, this.h])

		;

	},
});

