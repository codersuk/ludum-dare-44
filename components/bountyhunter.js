Crafty.c("Detector", {
	init : function () {
		this.requires('2D, DOM, Collision, Color')
		this.attr({x: GAME_SCREEN_WIDTH / 25 + 96 * 1.35, y: GAME_SCREEN_HEIGHT - 48 - SINGLE_UNIT - 2, w: 48, h: 48})
		this.jumpChance = 101;
		this.onHit("Obstacle", function (hitData, firstHit) {
			if(firstHit) {
				if(this.jumpChance > Math.floor(Math.random()*100)) {
					Crafty.trigger("Jump");
					console.log(this.color())
				}
			}
		}.bind(this)) 	
	},

	setJumpChance : function (chance) {
		this.jumpChance = chance;
		return this;
	}
});


Crafty.c("BountyHunter", {
	init : function () {
		this.requires('2D, DOM, Collision, Motion, Jumper, Gravity, bountyHunter')
		this.attr({x: GAME_SCREEN_WIDTH / 25 - 48, y: GAME_SCREEN_HEIGHT - 192 - SINGLE_UNIT, w: 96, h: 192})
		this.vx += MOVE_RIGHT_RATE_BOUNTY_HUNTER;
		this.ax += MOVE_RIGHT_ACCELERATION_RATE_PLAYER;
		this.jumpSpeed(200)
  		this.gravity("Platform");
		this.jumper(300, ['T']);
		Crafty.bind("Jump", function () {
			console.log("Wizard jumps")
			this.jump();
		}.bind(this));
	},
});

