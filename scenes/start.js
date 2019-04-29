/*
This is the start Scene

 */
Crafty.defineScene("Start", function () {

    Crafty.e('sceneLayer1');
    Crafty.e('sceneLayer2');
    Crafty.e('sceneLayer3');
    Crafty.e('sceneLayer4');
    Crafty.e('sceneLayer5');

    //Start timer to add to the total Score
    startTimer();
    // Menu in the middle

    var startButton = Crafty.e('2D, DOM, playbutton, Mouse, Keyboard')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.65, w: GAME_SCREEN_WIDTH * 0.6, h: 100})
    ;

//    Add event on click to jump to next screen

    startButton.bind('Click', function (MouseEvent) {
        // TODO: add scene link to start game
        // alert('Yay Start game');
        Crafty.scene('Game2', current_level);
    });

//    bind enter Button to start game

    startButton.bind('KeyDown', function (e) {
        if (e.key == 13) {
            // TODO: add scene link to start game here
            // alert('Enter clicked');
            Crafty.scene('Game2', current_level);
        }
    });


});



