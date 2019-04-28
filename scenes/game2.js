
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
var objAppearanceDelay; // delay function
function setObjectGenerationTimeout(userlevel) {
    objAppearanceDelay = Crafty.e("Delay").delay(function() {
        var objects = levels[userlevel];
        
        //if goes out of the index boundary
        if(levelObjIndex >= objects.length) {
            return;
        }
    
        //get the object
        var obj = objects[levelObjIndex++];
        Crafty.e(obj);
       
        setObjectGenerationTimeout(userlevel);
    }, getRandomInteger(3, 7) * 1000, 0) 
}

var GhostPlayer;
Crafty.defineScene("Game2", function (userlevel) {
    //TODO: add two layers of the background SCENE (need this from Tessa) This is to create the depth
    console.log("Game2 Loaded")
    var scene1BG = Crafty.e('Scene1BG')
    var platform = Crafty.e('GroundPlatform')
    player = Crafty.e('Player')
    GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)
    var bountyhunter = Crafty.e('BountyHunter')
    //TODO: load the course environment here

	resetVariables();

	//set timeout function to draw objects
    setObjectGenerationTimeout(userlevel);

    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT + SINGLE_UNIT)
}, function () {
    console.log("Game2 UnLoaded")
});

function resetVariables() {
    //reset object index
    levelObjIndex = 0;
}

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
