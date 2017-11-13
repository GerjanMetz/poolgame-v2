class Events {
    constructor() {
        console.log("events constructor");

        this.angle = 180;
        this.puttedBalls = [];
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

            // gameCore.world.cue.position.x = gameCore.world.balls[0].position.x;
            // // gameCore.world.cue.position.y = gameCore.world.balls[0].position.y + (gameCore.static.ballRadius * 2);
            // gameCore.world.cue.position.z = (gameCore.world.balls[0].position.z - (gameCore.static.cueLength / 2) - 0.1);

            gameCore.world.cue.posAt(gameCore.world.balls[0]);
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);

            this.angle = 180;

            if (this.flipCurrentTurn) { gameCore.flipCurrentTurn() }

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
            }

            if (event.detail.color === gameCore.currentTurn.color) { gameCore.currentTurn.addScore(10); } else { gameCore.currentTurn.addScore(-10); }

            switch (event.detail.number) {
                case 0:
                    gameCore.world.resetBall();
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                case 8:
                    gameCore.ui.showDeathScreen();
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                default:
                    console.log("putted switch default");
            }

            this.puttedBalls.push(event.detail);
        });
    }
}