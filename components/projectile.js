Crafty.c("Projectile", {

    init: function () {
        this.requires('2D, DOM, Collision, Color')
        this.attr({x: -SINGLE_UNIT, y: -SINGLE_UNIT, w: DOUBLE_UNIT, h: SINGLE_UNIT})
        this.vx += MOVE_RIGHT_RATE_PLAYER;
        this.color('#ff0000');
    }
});