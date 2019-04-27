var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;

var PLAYER_HIT_BOUNTY_HUNTER_EVENT = "PLAYER_HIT_BOUNTY_HUNTER_EVENT";

function makeCameraTrackEntity(entity, yoffset) {
	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.scale(1);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(entity, 0,  0 + yoffset);
	});
	Crafty.viewport.centerOn(entity, 10);
}

Crafty.defineScene("Game2", function() {
	var platform = Crafty.e('Platform')
	var player = Crafty.e('Player')
	var bountyhunter = Crafty.e('BountyHunter')

	// TODO Offset calculation isn't right, close enough for now.
	makeCameraTrackEntity(player, DOUBLE_UNIT  + SINGLE_UNIT)
});

Crafty.bind(PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
	Crafty.scene("Game2")
})