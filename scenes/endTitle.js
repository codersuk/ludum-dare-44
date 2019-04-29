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
        .attr({x: GAME_SCREEN_WIDTH * 0.4, y: GAME_SCREEN_HEIGHT * 0.4, w: GAME_SCREEN_WIDTH * 0.5, h: 100})
        .text(function () {
            var str = gametime.split(":");
            var minutes = parseInt(str[0]);
            var seconds = parseInt(str[1]);
            var displaytext = "Score: " + (minutes > 0 ? minutes  + "m ": "") + (seconds > 0 ? seconds  + "s": "")
            return displaytext;// "Your Score is " + GAME_TIME + " mms";
        })
        .textFont({
            size: '30px', family: 'Arial', weight: 'bold'
        }).textColor('#FFF');



    /*
    Add button to start the game again
     */
    var StartGame = Crafty.e('2D, DOM, Color, Mouse, Keyboard, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.7, w: GAME_SCREEN_WIDTH * 0.6, h: 100})
        .color('#ff6d63')
    ;

    Crafty.e('2D, DOM, Text, HUD, Delay')
        .attr({w: 350, h: 100, x: 450, y: 750})
        .fixedPosition(GAME_SCREEN_WIDTH /2 - 100, 300)
        .text("Play Again!")
        .textColor('#EEE')
        .css('text-shadow', '3px 3px 3px black')
        .unselectable()
        .textFont({ size: '40px', weight: 'bold' });

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



