/*
this is our game assets object.
 */
// TODO: swap the images with Tessa's images
// Image sizes: 32x64, 64x32, 16x16
// User lower case for component name
// 
var gameAssets = {
    "audio": {},
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
        "images/sprites/puddle.png": {
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

        "images/sprites/angrybird_red.png": {
            "tile": 50,
            "tileh": 50,
            "map": {"angrybird": [0, 0]}
        },
        "images/sprites/fire.png": {
            "tile": 32,
            "tileh": 32,
            "map": {"fire": [0, 0]}
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
        }

    },
};
