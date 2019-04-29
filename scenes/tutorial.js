/*
This is the start Scene

 */
Crafty.defineScene("Tutorial", function () {

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

    var instruction = Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.9, y: 3, w: 400, h: 40})
        .unselectable()
        .css('text-shadow', '2px 2px 2px black')
        .textAlign('center')
        .text("Collect the boosts and avoid obstacles to evade the witch!")
        .textFont({
            size: '14px', family: 'Garamond', weight: 'bold'
        })
        .textColor("#c2d6d6");
    instruction.x = (GAME_SCREEN_WIDTH/2) - (instruction.w/2) + 5;

    tutorial();
});

function tutorial() {

    var textColor = "#ddd";
     //BOX RIGHT
     Crafty.e('2D, DOM, Color')
     .attr({x: GAME_SCREEN_WIDTH * 0.7, y: GAME_SCREEN_HEIGHT * 0.68, w: 230, h: 100})
     .css('box-shadow', '2px 2px 6px 0 rgba(0,0,0,0.86)')
     .color('#194c5e');


    //BOX LEFT
    Crafty.e('2D, DOM, Color')
        .attr({x: GAME_SCREEN_WIDTH * 0.05, y: GAME_SCREEN_HEIGHT * 0.68, w: 230, h: 100})
        .css('box-shadow', '2px 2px 6px 0 rgba(0,0,0,0.86)')
        .color('#194c5e');

     //bird
     Crafty.e('2D, DOM, angrybird')
     .attr({x: GAME_SCREEN_WIDTH * 0.8, y: GAME_SCREEN_HEIGHT * 0.69, w: 42, h: 42})
 
     Crafty.e('2D, DOM, Text')
         .attr({x: GAME_SCREEN_WIDTH * 0.85, y: GAME_SCREEN_HEIGHT * 0.70, w: 120, h: 40})
         .unselectable()
         .text("Crow")
         .textColor(textColor);

     //woodenlog
     Crafty.e('2D, DOM, woodenlog')
     .attr({x: GAME_SCREEN_WIDTH * 0.73, y: GAME_SCREEN_HEIGHT * 0.75, w: 45, h: 45})
 
     Crafty.e('2D, DOM, Text')
         .attr({x: GAME_SCREEN_WIDTH * 0.71, y: GAME_SCREEN_HEIGHT * 0.88, w: 340, h: 40})
         .unselectable()
         .text("WoodenLog")
         .textColor(textColor);

    //puddle
    var obs_puddle = Crafty.e('2D, DOM, puddle')
    .attr({x: GAME_SCREEN_WIDTH * 0.79, y: GAME_SCREEN_HEIGHT * 0.84, w: 65, h: 10})

    Crafty.e('2D, DOM, Text')
    .attr({x: GAME_SCREEN_WIDTH * 0.81, y: GAME_SCREEN_HEIGHT * 0.81, w: 340, h: 40})
    .unselectable()
    .text("Puddle")
    .textColor(textColor);

    //stone
    Crafty.e('2D, DOM, stone')
    .attr({x: GAME_SCREEN_WIDTH * 0.86, y: GAME_SCREEN_HEIGHT * 0.75, w: 50, h: 32})

    Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.90, y: GAME_SCREEN_HEIGHT * 0.85, w: 340, h: 40})
        .unselectable()
        .text("Rock")
        .textColor(textColor);

    //text: hindrace
    Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.85, y: GAME_SCREEN_HEIGHT * 0.88, w: 340, h: 40})
        .unselectable()
        .text("Obstacles")
        .textFont({ size: '20px', family: 'Garamond', weight: 'bold'})
        .textColor(textColor);

    //text:boost
    Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.15, y: GAME_SCREEN_HEIGHT * 0.86, w: 340, h: 40})
        .unselectable()
        .text("Boosts")
        .textFont({ size: '20px', family: 'Garamond', weight: 'bold'})
        .textColor(textColor);
    
    //fireattack
    Crafty.e('2D, DOM, fireattack')
    .attr({x: GAME_SCREEN_WIDTH * 0.1, y: GAME_SCREEN_HEIGHT * 0.75, w: 70, h: 38})

    Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.1, y: GAME_SCREEN_HEIGHT * 0.72, w: 340, h: 40})
        .unselectable()
        .text("Dragon fire")
        .textColor(textColor);

    //fruit
    Crafty.e('2D, DOM, powerup')
    .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.77, w: 30, h: 30})

    Crafty.e('2D, DOM, Text')
        .attr({x: GAME_SCREEN_WIDTH * 0.2, y: GAME_SCREEN_HEIGHT * 0.72, w: 340, h: 40})
        .unselectable()
        .text("Fruit")
        .textColor(textColor);

 
   
}



