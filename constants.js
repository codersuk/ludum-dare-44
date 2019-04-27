// This file is for static constants.
var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;

var GAME_SCREEN_WIDTH = 800;
var GAME_SCREEN_HEIGHT = 600;

var GAME_TIME = 0;

var MOVE_RIGHT_RATE_BOUNTY_HUNTER = 30;
var MOVE_RIGHT_RATE_PLAYER = 25;

// Obstacles
var PUDDLE = "Puddle";
var STONE = "Stone";
var WOODENLOG = "WoodenLog";

// Power ups
var ANGRYBIRD = "AngryBird";
var FIRE = "Fire";
var SMOKE = "Smoke";


// TODO move these into global_events.js.  
var PLAYER_HIT_POWER_EVENT = "PLAYER_HIT_POWER_EVENT";
var PLAYER_HIT_OBSTACLE_EVENT = "PLAYER_HIT_OBSTACLE_EVENT";
var BOUNTY_HUNTER_HIT_OBSTACLE_EVENT = "BOUNTY_HUNTER_HIT_OBSTACLE_EVENT";

var objects = [
	 WOODENLOG, STONE, PUDDLE,
	 FIRE, SMOKE, ANGRYBIRD
];
