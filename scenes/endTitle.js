/*
This is the start Scene

 */
Crafty.defineScene("EndTitle", function () {

    Crafty.e('sceneLayer1');
    Crafty.e('sceneLayer2');
    Crafty.e('sceneLayer3');
    Crafty.e('sceneLayer4');
    Crafty.e('sceneLayer5');

    var textResult = Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.30, y: GAME_SCREEN_HEIGHT * 0.4, w: GAME_SCREEN_WIDTH * 0.5, h: 100})
        .unselectable()
        .text(function () {
            var str = gametime.split(":");
            var minutes = parseInt(str[0]);
            var seconds = parseInt(str[1]);
            var displaytext = "You survived: " + (minutes > 0 ? minutes  + "mins ": "") + (seconds > 0 ? seconds  + " secs": "")
            return displaytext;// "Your Score is " + GAME_TIME + " mms";
        })
        .textFont({
            size: '30px', family: 'Arial', weight: 'bold'
        }).textColor('#FFF');



    /*
    Add button to start the game again
     */
    var StartGame = Crafty.e('2D, DOM, playbutton, Mouse, Keyboard, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.5 - 120, y: GAME_SCREEN_HEIGHT * 0.65, w: 240, h: 60})        
    ;

    //    Add event on click to jump to next screen

        StartGame.bind('Click', function (MouseEvent) {
            // TODO: add scene link to start game
            // alert('Yay Start game');
            Crafty.scene('Game2', current_level);
        });

    //    bind enter Button to start game

        StartGame.bind('KeyDown', function (e) {
            if (e.key == 13) {
                // TODO: add scene link to start game here
                // alert('Enter clicked');
                Crafty.scene('Game2', current_level);
            }
        });

});



