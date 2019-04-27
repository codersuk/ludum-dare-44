Crafty.c("Player", {
	init : function () {
		this.requires('2D, DOM, Color, Twoway, Collision')
		this.attr({x: GAME_SCREEN_WIDTH / 2, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, w: DOUBLE_UNIT, h: SINGLE_UNIT})
		this.twoway(200)
		this.color('#171')
		this.onHit("BountyHunter", function (hitData) {
			Crafty.trigger(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT)
		})
	},
});
