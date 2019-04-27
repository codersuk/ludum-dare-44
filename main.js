var GAME_SCREEN_WIDTH = 800;
var GAME_SCREEN_HEIGHT = 600;
var GAME_TIME = 0;
// Moved the unit of measure here for all global variables
var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;

var MOVE_RIGHT_RATE_BOUNTY_HUNTER = 30;
var MOVE_RIGHT_RATE_PLAYER = 25;

Crafty.init(GAME_SCREEN_WIDTH,GAME_SCREEN_HEIGHT, document.getElementById('game'));


Crafty.scene("Loading");