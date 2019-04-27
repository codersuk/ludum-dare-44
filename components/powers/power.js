Crafty.c("Power", {
    init: function () {
        this.requires('Collision')
        this.onHit("Player", function (hitData) {
			Crafty.trigger(PLAYER_HIT_POWER_EVENT, this)
        })
    }
})