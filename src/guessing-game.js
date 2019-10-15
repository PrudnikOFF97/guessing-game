class GuessingGame {
    constructor() {
        let mini;
        let maxi;
        let curr_gues;
    }

    setRange(min, max) {
        this.mini = min;
        this.maxi = max;
    }

    guess() {
        this.curr_gues = this.mini + Math.ceil((this.maxi - this.mini) / 2);
        return this.curr_gues;
    }

    lower() {
        this.maxi = this.curr_gues;
    }

    greater() {
        this.mini = this.curr_gues;
    }
}

module.exports = GuessingGame;
