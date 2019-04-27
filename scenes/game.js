Crafty.defineScene("Game", function() {
	
	var redSquare = Crafty.e('2D, DOM, Color')
		.attr({x: 0, y: 0, w: 100, h: 100})
		.color('#F00');

	//region: GAME_TIME
	{
		var totalSeconds = 2 * 60;
		var time = Crafty.e('2D, DOM, Text') 
			.attr({w: 50, h: 100, x: 700, y: 20})
			.text("02:00")
			.bind("UpdateTime", function(){
				totalSeconds -= 1;
				var minutes = parseInt(totalSeconds / 60);
				var seconds = totalSeconds % 60;
				if(totalSeconds <= 0) {
					clearInterval(gameInterval);
				}
				this.text(("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));

			});

		var gameInterval = setInterval(function () {
			Crafty.trigger("UpdateTime");
		}, 1000);
	}
	//endregion: GAME_TIME

});