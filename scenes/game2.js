

function makeCameraTrackEntity(entity, yoffset) {
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
    var platform = Crafty.e('Platform')
    var player = Crafty.e('Player')
    var bountyhunter = Crafty.e('BountyHunter')
    //TODO: load the course environment here


    //Loads the Scene timer
    sceneCountdown();

    // TODO Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(player, DOUBLE_UNIT + SINGLE_UNIT)
});

Crafty.bind(GLOBAL_EVENTS.PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
    Crafty.scene("Game2")
})