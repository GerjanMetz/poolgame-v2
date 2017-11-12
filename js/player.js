class Player {
    constructor() {
        console.log("player constructor");
        this.name;
        this.color;
        this.score;
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