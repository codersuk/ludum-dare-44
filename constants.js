// This file is for static constants.
var SINGLE_UNIT = 64;
var DOUBLE_UNIT = 128;
var DISTANCE_UP_FROM_BOTTOM_OF_SCREEN = 32;

var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 400;

var GAME_TIME = 0;

var MOVE_RIGHT_RATE_PLAYER = 200 / 4;
var MOVE_RIGHT_RATE_BOUNTY_HUNTER = MOVE_RIGHT_RATE_PLAYER + 3;
var MOVE_RIGHT_ACCELERATION_RATE_PLAYER = 7;

// Obstacles
var PUDDLE = "Puddle";
var STONE = "Stone";
var WOODENLOG = "WoodenLog";

// Power ups
var ANGRYBIRD = "AngryBird";
var FIRE = "Fire";
var SMOKE = "Smoke";
var SPEED = "SpeedUp";


// TODO move these into global_events.js.  
var PLAYER_HIT_POWER_EVENT = "PLAYER_HIT_POWER_EVENT";
var PLAYER_HIT_OBSTACLE_EVENT = "PLAYER_HIT_OBSTACLE_EVENT";
var BOUNTY_HUNTER_HIT_OBSTACLE_EVENT = "BOUNTY_HUNTER_HIT_OBSTACLE_EVENT";

var objects = [
	 WOODENLOG, STONE, PUDDLE,
	 FIRE, SMOKE, ANGRYBIRD, SPEED
];

var levels = [
	[SPEED,WOODENLOG, SPEED, WOODENLOG, STONE, WOODENLOG, STONE, WOODENLOG, SPEED, STONE, STONE, STONE, STONE, STONE, STONE, WOODENLOG, STONE, STONE, STONE, WOODENLOG, STONE],
	[FIRE, STONE, WOODENLOG, STONE, FIRE, STONE, WOODENLOG, STONE, STONE, FIRE, FIRE, STONE, STONE, STONE, WOODENLOG, FIRE, STONE, STONE, WOODENLOG, FIRE],
	[FIRE, STONE, WOODENLOG, PUDDLE, FIRE, STONE, WOODENLOG, PUDDLE, STONE, FIRE, FIRE, STONE, PUDDLE, STONE, WOODENLOG, FIRE, STONE, STONE, WOODENLOG, FIRE],
	[WOODENLOG, STONE, PUDDLE, FIRE, SMOKE, ANGRYBIRD, WOODENLOG, STONE, PUDDLE, FIRE, SMOKE, ANGRYBIRD,WOODENLOG, STONE, PUDDLE, FIRE, SMOKE, ANGRYBIRD, ANGRYBIRD,ANGRYBIRD]
];

var TOTAL_LEVEL = 4;
var current_level = 0;