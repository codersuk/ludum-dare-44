var angry_width = 32;
var angry_height = 32;

Crafty.c(ANGRYBIRD, {
	init : function () {
		this.requires('2D, DOM, angrybird, Power')
        this.attr({x: (GAME_SCREEN_WIDTH/2 + GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - angry_height * 3, 
             w: angry_width, 
             h: angry_height})
        ;
	},
});

