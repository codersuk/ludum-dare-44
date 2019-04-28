Crafty.c("ScreenClickable", {
	init : function () {
		this.requires('2D, DOM, Mouse, HUD')
		this.attr({x : 0, y : 0, w : GAME_SCREEN_WIDTH, h : GAME_SCREEN_HEIGHT})
        this.fixedPosition(0, 0)
        this.bind('Click', function () {
        	console.log("GLOBAL_CLICK")
        	Crafty.trigger("GLOBAL_CLICK");
        });
	}
});
