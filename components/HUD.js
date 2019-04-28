Crafty.c("HUD", {
    init: function() { 
    	this.bind("EnterFrame", this.adjustPosition) 
    },

    fixedPosition: function(x, y) {
         this.fixedX = x; this.fixedY=y;
         return this;
    },

    adjustPosition: function() {
          this.x = this.fixedX - Crafty.viewport.x;
          this.y = this.fixedY - Crafty.viewport.y;
    }
})
