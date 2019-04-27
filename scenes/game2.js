
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
        .setCountdownOverAction(function () {
            clearInterval(gameInterval);
        })

    var gameInterval = setInterval(function () {
        Crafty.trigger("UpdateTime");
    }, 1000);
}

var objIndex = 0;
function generateObjects(userlevel) {
	setTimeout(function() {
		console.log("Generating obj");
		var obj;
		var objects = levels[userlevel];
		
		//if goes out of the index boundary
		if(objIndex >= objects.length) {
			objIndex = 0;
		}

		//get the object
		obj = objects[objIndex++];
		Crafty.e(obj);
		generateObjects(userlevel);

	}, getRandomInteger(3,7) * 1000);
}

var player;
Crafty.defineScene("Game2", function (userlevel) {
    //TODO: add two layers of the background SCENE (need this from Tessa) This is to create the depth

    var scene1BG = Crafty.e('Scene1BG')
    var platform = Crafty.e('Platform')
    player = Crafty.e('Player')
    var GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)
    var bountyhunter = Crafty.e('BountyHunter')
    //TODO: load the course environment here

	//reset object index
	objIndex = 0;

	//draw obstacles/powerups
	generateObjects(userlevel);

    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT + SINGLE_UNIT)
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
