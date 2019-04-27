var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;

function makeCameraTrackEntity(entity, yoffset) {
	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.scale(1);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(entity, 0,  0 + yoffset);
	});
	Crafty.viewport.centerOn(entity, 10);
}

Crafty.defineScene("Game2", function() {
	
	var platform = Crafty.e('2D, DOM, Color')
		.attr({x: 0, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT, w: 3000, h: SINGLE_UNIT})
		.color('#040');

	var player = Crafty.e('2D, DOM, Color, Twoway')
		.attr({x: GAME_SCREEN_WIDTH / 2, y: GAME_SCREEN_HEIGHT - SINGLE_UNIT - SINGLE_UNIT, w: DOUBLE_UNIT, h: SINGLE_UNIT})
		.twoway(200)
		.color('#171')

	var bountyhunter = Crafty.e('2D, DOM, Color')
		.attr({x: GAME_SCREEN_WIDTH / 25, y: GAME_SCREEN_HEIGHT - DOUBLE_UNIT - SINGLE_UNIT, w: SINGLE_UNIT, h: DOUBLE_UNIT})
		.color('#111');

	// TODO Offset calculation isn't right, close enough for now.
	makeCameraTrackEntity(player, DOUBLE_UNIT  + SINGLE_UNIT)
});