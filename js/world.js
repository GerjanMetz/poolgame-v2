class World {
    constructor() {
        console.log("world constructor");

        this.balls = [];

        this.table = new Table();
        this.createBalls(gameCore.static.amountBalls);
        // this.ball = new Ball();

        // this.ball.position.y = this.table.bed.position.y + gameCore.static.bedHeight / 2 + gameCore.static.ballRadius;
    }

    createBalls(amountBalls) {
        for (let i = 0; i < amountBalls; i++) {
            this.balls.push(new Ball());
            this.balls[i].position.z = (gameCore.static.bedDepth / 3) * -1 + (i * 0.13);
            this.balls[i].position.y = (gameCore.static.bedHeight / 2 + gameCore.static.ballRadius);

            gameCore.scene.add(this.balls[i]);
        }
    }
}