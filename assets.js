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
        "images/sprites/player.png": {
            "tile": 128,
            "tileh": 64,
            "map": {"player": [0, 0]}
        },

        "images/sprites/bountyHunter.png": {
            "tile": 64,
            "tileh": 128,
            "map": {"bountyHunter": [0, 0]}
        },
        "images/sprites/grass.png": {
            "tile": 64,
            "tileh": 64,
            "map": {"grass": [0, 0]}
        },
        "images/sprites/obstacle1.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"obstacle1": [0, 0]}
        },
        "images/sprites/obstacle2.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"obstacle2": [0, 0]}
        },
        "images/sprites/obstacle3.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"obstacle3": [0, 0]}
        },

        "images/sprites/powerUp1.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"powerUp1": [0, 0]}
        },
        "images/sprites/powerUp2.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"powerUp2": [0, 0]}
        },
        "images/sprites/powerUp3.png": {
            "tile": 48,
            "tileh": 48,
            "map": {"powerUp3": [0, 0]}
        },

    },
};
