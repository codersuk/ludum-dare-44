var fire_width = 64;
var fire_height = 64;

Crafty.c(FIRE, {
	init : function () {
		this.requires('2D, DOM, fire, Power')
        this.attr({x: (GAME_SCREEN_WIDTH + GhostPlayer.x),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - fire_height * 3 - (Math.random() * 200 - 100), 
             w: fire_width, 
             h: fire_height});
    	

	},
});

