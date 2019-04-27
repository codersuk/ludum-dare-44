Crafty.c("Obstacle", {
    init: function () {
        this.requires('Collision')
        this.onHit("Player", function (hitData) {
			Crafty.trigger(PLAYER_HIT_OBSTACLE_EVENT, this)
        })
        this.onHit("BountryHunter", function (hitData) {
			Crafty.trigger(BOUNTY_HUNTER_HIT_OBSTACLE_EVENT, this)
		}) 
    }
})