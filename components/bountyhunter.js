Crafty.c("BountyHunter", {
	init : function () {
		this.requires('2D, DOM, Collision, Motion, bountyHunter')
		this.attr({x: GAME_SCREEN_WIDTH / 25, y: GAME_SCREEN_HEIGHT - 192 - SINGLE_UNIT, w: 96, h: 192})
		this.vx += MOVE_RIGHT_RATE_BOUNTY_HUNTER;
		this.ax += MOVE_RIGHT_ACCELERATION_RATE_PLAYER;
	},
});

