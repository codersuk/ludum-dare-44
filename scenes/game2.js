var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;

var PLAYER_HIT_BOUNTY_HUNTER_EVENT = "PLAYER_HIT_BOUNTY_HUNTER_EVENT";

function makeCameraTrackEntity(entity, yoffset) {
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

Crafty.defineScene("Game2", function () {
    var platform = Crafty.e('Platform')
    var player = Crafty.e('Player')
	var bountyhunter = Crafty.e('BountyHunter')


	var obstacle_woodenlog = Crafty.e('WoodenLog')
	var obstacle_stone = Crafty.e('Stone')
	var obstacle_puddle = Crafty.e('Puddle')

	var power_fire = Crafty.e('Fire')
	var power_smoke = Crafty.e('Smoke')
	var power_angrybird = Crafty.e('AngryBird')
    //TODO: load the course environment here


    //Loads the Scene timer
    sceneCountdown();

    // TODO Offset calculation isn't right, close enough for now.
    makeCameraTrackEntity(player, DOUBLE_UNIT + SINGLE_UNIT)
});

Crafty.bind(PLAYER_HIT_BOUNTY_HUNTER_EVENT, function () {
    Crafty.scene("Game2")
})