/*
This is the start Scene

 */
Crafty.defineScene("Start", function () {
    Crafty.audio.play("ambient-background-slow", -1, 0.1);

    Crafty.e('sceneLayer1');
    Crafty.e('sceneLayer2');
    Crafty.e('sceneLayer3');
    Crafty.e('sceneLayer4');
    Crafty.e('sceneLayer5');

    //Start timer to add to the total Score
    // startTimer();
    // Menu in the middle

    var startButton = Crafty.e('2D, DOM, playbutton, Mouse, Keyboard')
        .attr({x: GAME_SCREEN_WIDTH * 0.5 - 120, y: GAME_SCREEN_HEIGHT * 0.75, w: 240, h: 60})
    ;

//    Add event on click to jump to next screen

    startButton.bind('Click', function (MouseEvent) {
        // TODO: add scene link to start game
        // alert('Yay Start game');
        Crafty.scene('Tutorial', current_level);
    });

//    bind enter Button to start game

    startButton.bind('KeyDown', function (e) {
        if (e.key == 13) {
            // TODO: add scene link to start game here
            // alert('Enter clicked');
            Crafty.scene('Tutorial', current_level);
        }
    });

    //TITLE
    var gameTitle = Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.38, y: GAME_SCREEN_HEIGHT * 0.4, w: GAME_SCREEN_WIDTH * 0.5, h: 100})
        .unselectable()
        .text("The Last Dragon")
        .css('text-shadow', '2px 2px 3px black')
        .textFont({
            size: '60px', family: 'Garamond', weight: 'bold'
        })
        .textColor('#FFF');
        //.textColor('#00cccc');

    gameTitle.x = (GAME_SCREEN_WIDTH/2) - (gameTitle.w/2);

    //dragon
    Crafty.e('2D, DOM, player')
    .attr({x: GAME_SCREEN_WIDTH * 0.25, y: GAME_SCREEN_HEIGHT * 0.208, w: 50, h: 94})

     //witch
     Crafty.e('2D, DOM, bountyHunter_flip')
     .attr({x: GAME_SCREEN_WIDTH * 0.67, y: GAME_SCREEN_HEIGHT * 0.208 - 32, w: 70, h: 136})

    //  Crafty.e('2D, DOM, Text')
    //     .attr({x: GAME_SCREEN_WIDTH * 0.88, y: GAME_SCREEN_HEIGHT * 0.30, w: 120, h: 40})
    //     .unselectable()
    //     .text("Witch")
    //     .textColor("FFF");

    var instruction = Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.9, y: 3, w: 400, h: 40})
        .unselectable()
        .css('text-shadow', '2px 2px 2px black')
        .textAlign('center')
        .text("The witch wants your dragon blood to make into potions to sell!")
        .textFont({
            size: '14px', family: 'Garamond', weight: 'bold'
        })
        .textColor("#c2d6d6");
    instruction.x = (GAME_SCREEN_WIDTH/2) - (instruction.w/2) + 5;

});
