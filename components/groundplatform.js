Crafty.c("GroundPlatform", {
	init : function () {
		this.requires('Platform, Image')
		this.attr({x: 0, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT, w: 300000, h: SINGLE_UNIT})
		this.image("images/sprites/grass.png","repeat-x")
	},
});

