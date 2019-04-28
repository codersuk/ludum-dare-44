Crafty.c("GroundPlatform", {
	init : function () {
		this.requires('Platform')
		this.attr({x: 0, y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN, w: 300000, h: DISTANCE_UP_FROM_BOTTOM_OF_SCREEN})

	},
});

