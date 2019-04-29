/*
this is our game assets object.
 */
// TODO: swap the images with Tessa's images
// Image sizes: 32x64, 64x32, 16x16
// User lower case for component name
// 
var gameAssets = {
    "audio": {
        "ambient-background-slow" : ["audio/ambient-woods-slow.wav"],
        "ambient-background-normal" : ["audio/ambient-woods-normal.wav"],
        "ambient-background-fast" : ["audio/ambient-woods-fast.wav"],
        "ambient-background-faster" : ["audio/ambient-woods-300.mp3"], 
        "ambient-background-fastest" : ["audio/ambient-woods-800.mp3"], 
        "dragon-fire" : ["audio/dragon-fire.mp3"], 
    },
    "images": [],
    "sprites": {
        "images/sprites/Dragonsprite68x128.png": {
            "tile": 68,
            "tileh": 128,
            "paddingY":1,
            "map": {"player": [0, 0]}
        },
        "images/sprites/Wizard99x192.png": {
            "tile": 99,
            "tileh": 192,
            "map": {"bountyHunter": [0, 0]}
        },

        "images/sprites/grass.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"grass": [0, 0]}
        },
        "images/sprites/Pool85x10.png": {
            "tile": 85,
            "tileh": 10,
            "map": {"puddle": [0, 0]}
        },
        "images/sprites/Rock92x60.png": {
            "tile": 92,
            "tileh": 60,
            "map": {"stone": [0, 0]}
        },
        "images/sprites/Log64x64.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"woodenlog": [0, 0]}
        },
        "images/sprites/Angrybird68x64.png": {
            "tile": 68,
            "tileh": 64,
            "map": {"angrybird": [0, 0]}
        },
        "images/sprites/FlamePowerup64x64.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"fire": [0, 0]}
        },
        "images/sprites/Flameattack128x64.png": {
            "tile": 128,
            "tileh": 64,
            "map": {"fireattack": [0, 0]}
        },
        "images/sprites/wind.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"wind": [0, 0]}
        },
        "images/sprites/smoke.png": {
            "tile": 64,
            "tileh": 128,
            "map": {"smoke": [0, 0]}
        },
        "images/sprites/FruitPowerup64x64.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"powerup": [0, 0]}
        },
        "images/sprites/Play240x60.png": {
            "tile": 240,
            "tileh": 60,
            "map": {"playbutton": [0, 0]}
        }

    },
};
