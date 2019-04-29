Crafty.c("Countdown", {
    init : function () {
        this.requires('2D, DOM, Text, HUD, Delay')
        this.totalSeconds = 0;
        this.attr({w: 50, h: 100, x: 800, y: 20})
        this.fixedPosition(800, 20)
        this.text("00:00")
        this.css('text-shadow', '3px 3px 3px black')
        this.textColor('#EEE');
        this.unselectable()
        this.delay(this.updateTimer, 1000, -1);
        this.textFont({ size: '26px', weight: 'bold' });
        this.bind("UpdateTime", function () {
            
        });
    },

    updateTimer : function () {
        //calculate time
        this.totalSeconds += 1;
        var minutes = parseInt(this.totalSeconds / 60);
        var seconds = this.totalSeconds % 60;
        if (this.totalSeconds <= 0) {
            if(typeof this.countdownOver !== 'undefined') {
                this.countdownOver();
            }
        }

        gametime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
        //update time text
        this.text(gametime);
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    }
});

