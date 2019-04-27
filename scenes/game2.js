

var PLAYER_HIT_POWER_EVENT = "PLAYER_HIT_POWER_EVENT";
var PLAYER_HIT_OBSTACLE_EVENT = "PLAYER_HIT_OBSTACLE_EVENT";
var BOUNTY_HUNTER_HIT_OBSTACLE_EVENT = "BOUNTY_HUNTER_HIT_OBSTACLE_EVENT";

var objects = [
	 WOODENLOG, STONE, PUDDLE,
	 FIRE, SMOKE, ANGRYBIRD
];


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
    var totalSeconds = 2 * 60;
    var time = Crafty.e('2D, DOM, Text')
        .attr({w: 50, h: 100, x: 700, y: 20})
        .text("02:00")
        .bind("UpdateTime", function () {
            //calculate time
            totalSeconds -= 1;
            var minutes = parseInt(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            if (totalSeconds <= 0) {
                clearInterval(gameInterval);
            }

            //update time text
            this.text(("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));

        });

    var gameInterval = setInterval(function () {
        Crafty.trigger("UpdateTime");
    }, 1000);
}

function generateObjects() {
	setTimeout(function() {
		console.log("Generating obj");
		var obj = objects[getRandomInteger(0, objects.length)];
		Crafty.e(obj);
		generateObjects();
	}, getRandomInteger(3,7) * 1000);
}

// function t() {
// 	var obj = objects[getRandomInteger(0, objects.length)];
// 	Crafty.e(obj);
// 	setTimeout(t, getRandomInteger(2,10) * 1000)	
// }
var player;
Crafty.defineScene("Game2", function () {
    //TODO: add two layers of the background SCENE (need this from Tessa) This is to create the depth

    var scene1BG = Crafty.e('Scene1BG')
    var platform = Crafty.e('Platform')
    player = Crafty.e('Player')
    var GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)
    var bountyhunter = Crafty.e('BountyHunter')
    //TODO: load the course environment here

	//draw obstacles/powerups
	var fn_generateObj = generateObjects();

    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT + SINGLE_UNIT)
});

Crafty.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
    Crafty.scene("Game2")
})


Crafty.bind(PLAYER_HIT_POWER_EVENT, function (hitData) {
	//destroy the obj
    hitData[0].obj.destroy();
})

Crafty.bind(PLAYER_HIT_OBSTACLE_EVENT, function (hitData) {
    //slow down player
})

Crafty.bind(BOUNTY_HUNTER_HIT_OBSTACLE_EVENT, function (hitData) {
	//make it jump
})
