class Events {
    constructor() {
        console.log("events constructor");

        this.angle = 180;
        this.puttedBalls = [];
        this.turnPuttedBalls = [];
        this.flipCurrentTurn = false;

        gameCore.controls.mouseButtons.ORBIT = THREE.MOUSE.RIGHT;
        gameCore.controls.mouseButtons.PAN = null;

        window.addEventListener('resize', () => {
            gameCore.camera.aspect = window.innerWidth / window.innerHeight;
            gameCore.camera.updateProjectionMatrix();
            gameCore.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        window.addEventListener('click', () => {
            let cueX = gameCore.world.cue.position.x;
            let cueZ = gameCore.world.cue.position.z;

            let dx = gameCore.world.balls[0].position.x - cueX;
            let dz = gameCore.world.balls[0].position.z - cueZ;

            gameCore.world.balls[0].SetSpeedX = dx * 0.1;
            gameCore.world.balls[0].SetSpeedZ = dz * 0.1;

            gameCore.world.cue.visible = false;
            gameCore.inAnimation = true;
        });

        window.addEventListener('mousemove', (event) => {
            if (gameCore.inAnimation) { return; }

            let dx = gameCore.world.balls[0].position.x;
            let dz = gameCore.world.balls[0].position.z;

            this.angle += (event.movementX) * 0.01;

            gameCore.world.cue.position.x = Math.sin(this.angle) * 0.9;
            gameCore.world.cue.position.z = Math.cos(this.angle) * 0.9;

            gameCore.world.cue.position.x += dx;
            gameCore.world.cue.position.z += dz;

            gameCore.world.cue.pointAt(gameCore.world.balls[0]);
        });

        window.addEventListener('endTurn', () => {
            console.log("endTurn");

            gameCore.world.cue.posAt(gameCore.world.balls[0]);
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);

            if (this.turnPuttedBalls.length === 0) { this.flipCurrentTurn = true; }

            for (let i = 0; i < this.turnPuttedBalls.length; i++){
                if (this.turnPuttedBalls[i].color !== gameCore.currentTurn.color) { this.flipCurrentTurn = true; }
            }

            this.angle = 180;

            if (this.flipCurrentTurn) { gameCore.flipCurrentTurn() }

            console.log("currentTurn: ", gameCore.currentTurn);
            this.turnPuttedBalls = [];
            this.flipCurrentTurn = false;
            gameCore.world.cue.visible = true;
            gameCore.inAnimation = false;
        });

        window.addEventListener('ballPutted', (event) => {
            console.log("ballputted event");
            console.log(event);
            event.detail.isPutted = true;

            // deciding what color will be assigned to players
            if (gameCore.currentTurn.color === undefined) {
                console.log("COLOR UNDEFINED");
                let otherColor;
                if (event.detail.color === "full") { otherColor = "half" } else { otherColor = "full" }

                if (gameCore.currentTurn === gameCore.player1) {
                    gameCore.player1.changeColor(event.detail.color);
                    gameCore.player2.changeColor(otherColor);
                } else if (gameCore.currentTurn === gameCore.player2) {
                    gameCore.player1.changeColor(otherColor);
                    gameCore.player2.changeColor(event.detail.color);
                }
                console.log("p1 plays: " + gameCore.player1.color);
                console.log("p2 plays: " + gameCore.player2.color);
            }


            switch (event.detail.number) {
                case 0:
                    gameCore.world.resetBall();
                    this.flipCurrentTurn = true;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    if (event.detail.color === gameCore.currentTurn.color) {
                        gameCore.currentTurn.addScore(1);
                    } else {
                        gameCore.otherTurn.addScore(1);
                        // this.flipCurrentTurn = true;
                    }

                    break;
                case 8:
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    if (event.detail.color === gameCore.currentTurn.color) {
                        gameCore.currentTurn.addScore(1);
                    } else {
                        gameCore.otherTurn.addScore(1);
                        // this.flipCurrentTurn = true;
                    }
                    break;
                default:
                    console.log("putted switch default");
            }

            console.log("Score P1: " + gameCore.player1.score);
            console.log("Score P2: " + gameCore.player2.score);
            this.turnPuttedBalls.push(event.detail);
            this.puttedBalls.push(event.detail);
        });
    }
}