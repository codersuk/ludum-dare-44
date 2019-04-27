Crafty.c("Player", {
    //TODO: define the size of the Player 64x64 or 128x64?
    init: function () {
        this.requires('2D, DOM, Collision, Motion, Gravity, Jumper, player, Keyboard')
        this.attr({
            x: GAME_SCREEN_WIDTH / 2,
            y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT,
            w: DOUBLE_UNIT,
            h: SINGLE_UNIT
        })

        this.jumper(300, ['UP_ARROW', 'W']);
        this.gravity("Platform");
        this.vx += MOVE_RIGHT_RATE_PLAYER;
        this.setupJumping();
        this.setupActionForHitting(STONE, this.stopMoving, this.startMoving);
        this.setupActionForHitting(WOODENLOG, this.stopMoving, this.startMoving);
        this.setupActionForHitting("BountyHunter", function (hitData) {
            Crafty.trigger(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT)
        });
        this.setupPlayerControls();
    },

    setupPlayerControls: function () {
        this.bind("KeyDown", function (e) {

            //if player keys 'space bar' it shoots something
            //TODO bind a different key if needed
            if (e.key == 32) {
                console.log('PEWPEW');
                let tempItem = Crafty.e('Projectile')
                tempItem.x = this.x + this.w + 10;
                tempItem.y = this.y;

                setTimeout(function () {
                    this.color('#fff', 0.3);

                }.bind(tempItem), 400)

                setTimeout(function () {
                    //TODO: add a gradual effect to the component and delete
                    this.color('#fff', 0);
                }.bind(tempItem), 700)
            }
            // console.log(this.x);


        })
    },

    setupActionForHitting: function (objectToHit, onHit, offHit) {
        this.onHit(objectToHit, function (hitData) {
            if (isObjectNotNull(onHit)) {
                onHit.call(this);
            }
            this.trigger("PLAYER_HIT_" + objectToHit);
        }, function (hitData) {
            if (isObjectNotNull(onHit)) {
                offHit.call(this);
            }
            this.trigger("PLAYER_STOPPED_HITTING_" + objectToHit);
        });

        this.bind("PLAYER_HIT_" + objectToHit, function () {
            console.log("PLAYER_HIT_" + objectToHit);
        })
        this.bind("PLAYER_STOPPED_HITTING_" + objectToHit, function () {
            console.log("PLAYER_HIT_" + objectToHit);
        })
    },

    setupJumping: function () {
        this.hasDoubleJumpPowerUp = true;
        //double jump check
        //Use default template online
        this.bind("CheckJumping", function (ground) {
            if (!ground && this.hasDoubleJumpPowerUp) {
                this.canJump = true;
                this.jumpSpeed(350);
                this.hasDoubleJumpPowerUp = false;
            }
        });
        this.bind("LandedOnGround", function (ground) {
            this.jumpSpeed(300);
            this.hasDoubleJumpPowerUp = true; // give this new double jump powerup upon landing
        });
    },

    stopMoving: function () {
        console.log("test")
        this.vx = 0;
    },

    startMoving: function () {
        this.vx = MOVE_RIGHT_RATE_PLAYER;
    }
});
