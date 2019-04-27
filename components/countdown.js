Crafty.c("Countdown", {
    init : function () {
        this.requires('2D, DOM, Text')
        this.totalSeconds = 2 * 6;
        this.attr({w: 50, h: 100, x: 700, y: 20})
        this.text("02:00")
        this.bind("UpdateTime", function () {
            //calculate time
            this.totalSeconds -= 1;
            var minutes = parseInt(this.totalSeconds / 60);
            var seconds = this.totalSeconds % 60;
            if (this.totalSeconds <= 0) {
                if(typeof this.countdownOver !== 'undefined') {
                    this.countdownOver();
                }
            }

            //update time text
            this.text(("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));

        });
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    }
});

