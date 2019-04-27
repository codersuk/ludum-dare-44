/*
This is the start Scene

 */
Crafty.defineScene("EndTitle", function () {

    //Stops timer and add it to the total score
    stopTimer()

    var textResult = Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.10, w: GAME_SCREEN_WIDTH * 0.5, h: 100})
        .text(function () {
            return "Your Score is " + GAME_TIME + " mms";
        })
        .textFont({
            size: '20px', family: 'Arial', weight: 'bold'
        }).textColor('#FFF');



    /*
    Add button to start the game again
     */
    var StartGame = Crafty.e('2D, DOM, Color, Mouse, Keyboard')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.7, w: GAME_SCREEN_WIDTH * 0.6, h: 100})
        .color('#ff6d63')
    ;

    //    Add event on click to jump to next screen

        StartGame.bind('Click', function (MouseEvent) {
            // TODO: add scene link to start game
            // alert('Yay Start game');
            Crafty.scene('EndTitle');
        });

    //    bind enter Button to start game

        StartGame.bind('KeyDown', function (e) {
            console.log(e);
            if (e.key == 13) {
                // TODO: add scene link to start game here
                alert('Enter clicked');
                Crafty.scene('EndTitle');
            }
        });

});



