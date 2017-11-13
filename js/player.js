class Player {
    constructor(name) {
        console.log("player constructor");
        this.name = name;
        this.color;
        this.score = 0;
        this.balls = [];
    }

    changeName(name) {
        this.name = name;
    }

    changeColor(color) {
        this.color = color;
    }

    addScore(score) {
        this.score += score;
    }
}