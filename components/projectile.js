Crafty.c("Projectile", {

    init: function () {
        this.requires('2D, DOM, Collision, fireattack')
        this.attr({x: -SINGLE_UNIT, y: -SINGLE_UNIT, w: 128, h: 64})
        this.vx += MOVE_RIGHT_RATE_PLAYER;
    }
});