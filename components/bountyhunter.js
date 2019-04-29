Crafty.c("Detector", {
	init : function () {
		this.requires('2D, DOM, Collision, Color')
		this.attr({x: GAME_SCREEN_WIDTH / 25 + 240, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - 48 - 2, w: 48, h: 48})
		this.jumpChance = 101;
		this.onHit("Obstacle", function (hitData, firstHit) {
			if(firstHit) {
				if(this.jumpChance > Math.floor(Math.random()*100)) {
					Crafty.trigger("WizardJump");
					// console.log(this.color())
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
		this.requires('2D, DOM, Collision, Motion, Jumper, Gravity, bountyHunter, Delay')
		this.attr({x: GAME_SCREEN_WIDTH / 25 + 70, y: GAME_SCREEN_HEIGHT - 192 - SINGLE_UNIT, w: 99, h: 192})
		this.vx += MOVE_RIGHT_RATE_BOUNTY_HUNTER;
		this.ax += MOVE_RIGHT_ACCELERATION_RATE_PLAYER;
		this.jumpSpeed(200)
  		this.gravity("Platform");
		this.setupActionForHitting("Projectile", this.slowDownWitch),
		this.setupActionForHitting(ANGRYBIRD, this.decreaseSpeed),
		Crafty.bind("WizardJump", function () {
			console.log("Wizard jumps")
			this.jump();
		}.bind(this));
	},
	slowDownWitch: function(hitData) {
		this.vx -= 100; 
		var fire = hitData[0].obj;
		this.delay(function () {
			fire.css('opacity', '0.4');
        }, 100);
		this.delay(function () {
			fire.destroy();
        }, 400);
	

        this.delay(function () {
            this.vx += 100;
        }, 600);
	},
	decreaseSpeed: function() {
        this.vx -= 50; 

        this.delay(function () {
            this.vx += 50;
        }, 1000); 
    },
	setupActionForHitting: function (objectToHit, onHit, offHit) {
        this.onHit(objectToHit, function (hitData, firstHit) {
            if (isObjectNotNull(onHit) && firstHit) {
                onHit.call(this, hitData);
            }
            this.trigger("BOUNTY_HUNTER_HIT_" + objectToHit);
        }, function (hitData) {
            if (isObjectNotNull(offHit)) {
                offHit.call(this);
            }
            this.trigger("BOUNTY_HUNTER_STOPPED_HITTING_" + objectToHit);
        });


        this.bind("PBOUNTY_HUNTER_HIT_" + objectToHit, function () {
            // console.log("BOUNTY_HUNTER_HIT_" + objectToHit);
        })
        this.bind("BOUNTY_HUNTER_STOPPED_HITTING_" + objectToHit, function () {
            // console.log("BOUNTY_HUNTER_HIT_" + objectToHit);
        })
    },
});

