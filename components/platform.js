Crafty.c("Platform", {
	init : function () {
		this.requires('2D, DOM, Image')
		this.attr({x: 0, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT, w: 3000, h: SINGLE_UNIT})
		this.image("images/sprites/grass.png","repeat-x")
	},
});

