var smoke_width = 64;
var smoke_height = 128;
//Smoke delays the wizard
Crafty.c(SMOKE, {
	init : function () {
		this.requires('2D, DOM, smoke, Power')
        this.attr({x: (GAME_SCREEN_WIDTH + GhostPlayer.x),
             y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, 
             w: smoke_width, 
             h: smoke_height})
		;

	},
});

