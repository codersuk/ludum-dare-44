Crafty.c("BountyHunter", {
	init : function () {
		this.requires('2D, DOM,  Collision, bountyHunter')
		this.attr({x: GAME_SCREEN_WIDTH / 25, y: GAME_SCREEN_HEIGHT - DOUBLE_UNIT - SINGLE_UNIT, w: SINGLE_UNIT, h: DOUBLE_UNIT})

	},
});

