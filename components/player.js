Crafty.c("Player", {

    //TODO: define the size of the Player 64x64 or 128x64?
    init: function () {
        this.requires('2D, DOM, Collision, Motion, Mouse, Gravity, Delay, Jumper, player, Keyboard, SpriteAnimation')
        this.attr({
            x: GAME_SCREEN_WIDTH / 2,
            y: GAME_SCREEN_HEIGHT - SINGLE_UNIT,
            w: SINGLE_UNIT,
            h: DOUBLE_UNIT
        })
        this.jumper(300, ['UP_ARROW', 'W','SPACE']);
        this.gravity("Platform");
        this.vx += MOVE_RIGHT_RATE_PLAYER;
        this.ax += MOVE_RIGHT_ACCELERATION_RATE_PLAYER;
        this.savedVx = this.velocity().x;
        this.setupJumping();
        this.setupActionForHitting(SPEED, this.increaseSpeed);
        this.setupActionForHitting(FIRE, this.blastFire);
        this.setupActionForHitting(PUDDLE, this.decreaseSpeed);
        this.setupActionForHitting(ANGRYBIRD, this.decreaseSpeed);
        this.setupActionForHitting(STONE, this.stopMoving, this.startMoving);
        this.setupActionForHitting(WOODENLOG, this.stopMoving, this.startMoving);
        this.setupActionForHitting("BountyHunter", function (hitData) {
            Crafty.trigger(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT)
        });
        this.setupPlayerControls();
        this.setupAnimation();
        // Setup the hit action
        this.userWasHit();

    },

   userWasHit:function(){
    this.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT,function(){
        setTimeout(function () {
            Crafty.scene('EndTitle');
          }, 300)
    })
   },


    increaseSpeed : function () {
        this.vx += 120; 

        this.delay(function () {
            this.vx -= 120;
        }, 800); 
    },
    decreaseSpeed: function() {
        this.vx -= 50; 

        this.delay(function () {
            this.vx += 50;
        }, 1000); 
    },
    blastFire: function() {
        this.animate('PlayerReverseRunning', -1)
        var player = this;

        let tempItem = Crafty.e('Projectile, Delay')
        tempItem.x = this.x - this.w - 20;
        tempItem.y = this.y;
        tempItem.collision([0 + (this.w/2), 0, this.w, 0, this.w, this.h, 0 + (this.w/2), this.h]);
        tempItem.delay(function () {
            player.animate('PlayeRunning', -1);

        }, 700, 1);

    },
   
    /*
    Animation start
     */

    setupAnimation: function () {

        //Define the running animation
        this.reel('PlayeRunning',
            400,
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        )

        this.reel('PlayerReverseRunning',
        300,
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3]
        ]
    )

        //Animation for when the player jumping
        this.reel('PlayerJumping',
            300,
            [
                [0, 0]
            ])
        //inifinite run
        this.animate("PlayeRunning", -1);
    },


    /*
    Animation end
     */

    setupPlayerControls: function () {
        this.bind("KeyDown", function (e) {


            //if player keys 'space bar' it shoots something
            //TODO: bind a different key if needed
            // if (e.key == 32) {
            //     let tempItem = Crafty.e('Projectile, Delay')
            //     tempItem.x = this.x + this.w + 20;
            //     tempItem.y = this.y;
            //     tempItem.delay(function () {
            //         this.color('#fff', 0.3);
            //
            //     }, 400, 1);
            //     tempItem.delay(function () {
            //         this.destroy();
            //     }, 700, 1);
            //
            //
            // }

        })
    },

    setupActionForHitting: function (objectToHit, onHit, offHit) {
        this.onHit(objectToHit, function (hitData, firstHit) {
            if (isObjectNotNull(onHit) && firstHit) {
                onHit.call(this);
            }
            this.trigger("PLAYER_HIT_" + objectToHit);
        }, function (hitData) {
            if (isObjectNotNull(offHit)) {
                offHit.call(this);
            }
            this.trigger("PLAYER_STOPPED_HITTING_" + objectToHit);
        });


        this.bind("PLAYER_HIT_" + objectToHit, function () {
            // console.log("PLAYER_HIT_" + objectToHit);
        })
        this.bind("PLAYER_STOPPED_HITTING_" + objectToHit, function () {
            // console.log("PLAYER_HIT_" + objectToHit);
        })
    },


    doubleJump: function (ground) {
        if (!ground && this.hasDoubleJumpPowerUp) {
            this.canJump = true;
            this.jumpSpeed(300);
            //Reset double jump
            this.hasDoubleJumpPowerUp = false;

        }
    },

    setupJumping: function () {
        //Assign double jump on power up?
        this.hasDoubleJumpPowerUp = true;
        //double jump check
        //Use default template online
        this.bind("CheckJumping", function (ground) {
            this.animate('PlayerJumping',1)
            this.doubleJump(ground)
        });
        this.bind("LandedOnGround", function (ground) {
            this.jumpSpeed(300);
            this.animate("PlayeRunning", -1);
            this.hasDoubleJumpPowerUp = true; // give this new double jump powerup upon landing
        });
    },

    stopMoving: function () {
        this.savedVx = this.velocity().x;
        this.vx = 0;
    },

    startMoving: function () {
        this.vx = this.savedVx;
    }

});
