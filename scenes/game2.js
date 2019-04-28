
function makeCameraTrackEntity(entity, yoffset) {
    // Sets up the Camera Tracking to the player entity
    Crafty.viewport.clampToEntities = false;
    Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone", function () {
        Crafty.viewport.follow(entity, 0, 0 + yoffset);
    });
    Crafty.viewport.centerOn(entity, 0);
}

function sceneCountdown() {
    var time = Crafty.e('Countdown')
}

var levelIndex = 2;

function generateObjects(userlevel) {
	setTimeout(function() {
		var obj;
		var objects = levels[userlevel];
		
		//if goes out of the index boundary
		if(levelIndex >= objects.length) {
			levelIndex = 0;
		}

		//get the object
		obj = objects[levelIndex++];
		Crafty.e(obj);
		generateObjects(userlevel);

	}, getRandomInteger(3,8) * 1000);
}

var player;
Crafty.defineScene("Game2", function (userlevel) {
    //TODO: add two layers of the background SCENE (need this from Tessa) This is to create the depth
    console.log("Game2 Loaded")
    var scene1BG = Crafty.e('Scene1BG')
    var platform = Crafty.e('GroundPlatform')
    player = Crafty.e('Player')
    var GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)
    var bountyhunter = Crafty.e('BountyHunter')
    var bountyhunterJumpDetector = Crafty.e('Detector')
        .setJumpChance(40)
        // .color('#333')
    var bountyhunterJumpDetector2 = Crafty.e('Detector')
        .attr({x: GAME_SCREEN_WIDTH / 25 + 96})
        .setJumpChance(60)
        // .color('#534')
    var bountyhunterJumpDetector3 = Crafty.e('Detector')
        .attr({x: GAME_SCREEN_WIDTH / 25})
        // .color('#274')
    bountyhunter.attach(bountyhunterJumpDetector);
    bountyhunter.attach(bountyhunterJumpDetector2);
    bountyhunter.attach(bountyhunterJumpDetector3);
    //TODO: load the course environment here

	//reset object index
	levelIndex = 2;

	//draw obstacles/powerups
	generateObjects(userlevel);

    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT + SINGLE_UNIT)
}, function () {
    console.log("Game2 UnLoaded")
});

Crafty.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
    Crafty.scene("Game2", current_level)
})


Crafty.bind(PLAYER_HIT_POWER_EVENT, function (obj) {
	//destroy the obj
	obj.destroy();
})

Crafty.bind(PLAYER_HIT_OBSTACLE_EVENT, function (hitData) {
    //slow down player
})

Crafty.bind(BOUNTY_HUNTER_HIT_OBSTACLE_EVENT, function (hitData) {
	//make it jump
})
