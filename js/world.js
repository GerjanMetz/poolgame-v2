class World {
    constructor() {
        console.log("world constructor");

        this.balls = [];

        this.table = new Table();
        this.cue = new Cue();


        this.createBalls(gameCore.static.amountBalls);
        this.setupBalls();
    }

    createBalls(amountBalls) {
        for (let i = 0; i < amountBalls; i++) {
            this.balls.push(new Ball());
            this.balls[i].position.z = (gameCore.static.bedDepth / 3) * -1 + (i * 0.13);
            this.balls[i].position.y = (gameCore.static.bedHeight / 2 + gameCore.static.ballRadius);

            this.balls[i].material.color.setHex(0xdd0000);

            gameCore.scene.add(this.balls[i]);
        }
        this.balls[0].material.color.setHex(0xdddddd);

    }

    setupBalls() {
        this.balls[0].position.set(0, gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, (gameCore.static.bedDepth / 3) * -1);

        this.balls[1].position.set(0, gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, gameCore.static.bedDepth / 4);

        this.balls[2].position.set(this.balls[1].position.x + (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (1 * 0.096));
        this.balls[3].position.set(this.balls[1].position.x - (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (1 * 0.096));

        this.balls[4].position.set(this.balls[1].position.x + (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));
        this.balls[5].position.set(this.balls[1].position.x + (0 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));
        this.balls[6].position.set(this.balls[1].position.x - (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));

        this.balls[7].position.set(this.balls[1].position.x + (3 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[8].position.set(this.balls[1].position.x + (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[9].position.set(this.balls[1].position.x - (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[10].position.set(this.balls[1].position.x - (3 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));

        this.balls[11].position.set(this.balls[1].position.x + (4 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[12].position.set(this.balls[1].position.x + (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[13].position.set(this.balls[1].position.x - (0 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[14].position.set(this.balls[1].position.x - (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[15].position.set(this.balls[1].position.x - (4 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
    }
}