

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

Crafty.defineScene("Game2", function () {

    //TODO: add two layers of the background SCENE (need this from Tessa) This is to create the depth

    var scene1BG = Crafty.e('Scene1BG')
    var platform = Crafty.e('Platform')
    var player = Crafty.e('Player')
    var GhostPlayer = Crafty.e('GhostPlayer') // ghost player (hidden, no collision)
    var bountyhunter = Crafty.e('BountyHunter')

    //TODO: load the course environment here


    //Loads the Scene timer
    sceneCountdown();

    // TODO: Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(GhostPlayer, DOUBLE_UNIT + SINGLE_UNIT)
});

Crafty.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
    Crafty.scene("Game2")
})