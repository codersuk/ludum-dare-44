
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

var levelObjIndex = 0;
var position = 0
function placeObjectsOnScreen(userlevel) {
    var objects = levels[userlevel];  
    for(var i = 0; i < objects.length; i++)
    {
        position += getRandomInteger(200, 400);
        var obj = objects[levelObjIndex++];
        var craftyObj = Crafty.e(obj).changePosition(position);
    }
}

var GhostPlayer;
Crafty.defineScene("Game2", function (userlevel) {
    // console.log("Game2 Loaded")
    Crafty.audio.play("ambient-background-slow", -1, 0.1);
    
    Crafty.e('sceneLayer1').vx = 0;
    Crafty.e('sceneLayer2');
    Crafty.e('sceneLayer3');
    Crafty.e('sceneLayer4').vx = 0;
    var platform = Crafty.e('GroundPlatform')
    player = Crafty.e('Player')
    GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)

    Crafty.e('ScreenClickable');
    Crafty.bind("GLOBAL_CLICK", function() {
        player.jump();
    });

    var bountyhunter = Crafty.e('BountyHunter')
    var bountyhunterJumpDetector = Crafty.e('Detector')
        .setJumpChance(40)
        // .color('#333')
    var bountyhunterJumpDetector2 = Crafty.e('Detector')
        .attr({x: GAME_SCREEN_WIDTH / 25 + 170})
        .setJumpChance(60)
        // .color('#534')
    var bountyhunterJumpDetector3 = Crafty.e('Detector')
        .attr({x: GAME_SCREEN_WIDTH / 25 + 100})
        // .color('#274')
    bountyhunter.attach(bountyhunterJumpDetector);
    bountyhunter.attach(bountyhunterJumpDetector2);
    bountyhunter.attach(bountyhunterJumpDetector3);
    //TODO: load the course environment here

	resetVariables();
    placeObjectsOnScreen(userlevel);
    
    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT)
    Crafty.e('sceneLayer5').vx = 0;
}, function () {
    // console.log("Game2 UnLoaded");
});

function resetVariables() {
    //reset object index
    levelObjIndex = 0;
    position = GAME_SCREEN_WIDTH;
    gametime = "";
}

Crafty.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () { 
    // Crafty.scene("Game2", current_level)
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
