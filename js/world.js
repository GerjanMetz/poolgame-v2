class World {
    constructor() {
        console.log("world constructor");

        this.table = new Table();
        this.ball = new Ball();

        this.ball.position.y = this.table.bed.position.y + gameCore.static.bedHeight / 2 + gameCore.static.ballRadius;
    }
}