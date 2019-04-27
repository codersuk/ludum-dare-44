Crafty.c("Player", {
	//TODO: define the size of the Player 64x64 or 128x64?
	init : function () {

		this.requires('2D, DOM, Collision, Motion, Gravity, Jumper player')
		this.attr({x: GAME_SCREEN_WIDTH / 2, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, w: DOUBLE_UNIT, h: SINGLE_UNIT})
		this.jumper(300, ['UP_ARROW', 'W']);
  		this.gravity("Platform");
		this.vx += MOVE_RIGHT_RATE_PLAYER;
		this.onHit("BountyHunter", function (hitData) {
			Crafty.trigger(PLAYER_HIT_BOUNTY_HUNTER_EVENT)
		})
	},
});
