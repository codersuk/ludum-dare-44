Crafty.c("GhostPlayer", {
    //TODO: define the size of the Player 64x64 or 128x64?
    //TODO: make sure the new player size is updated here as this is the ghost player
    init : function () {

        this.requires('2D, DOM,  Motion, Gravity')
        this.attr({x: GAME_SCREEN_WIDTH / 2, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, w: DOUBLE_UNIT, h: SINGLE_UNIT})

        this.gravity("Platform");
        this.vx += MOVE_RIGHT_RATE_PLAYER; //Use same rate as player. This needs to be reset if the original Player Component is changed.
		this.ax += MOVE_RIGHT_ACCELERATION_RATE_PLAYER;
        

    },
});
