class Events {
    constructor() {
        console.log("events constructor");

        this.angle = 180;

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

            gameCore.world.cue.position.x = gameCore.world.balls[0].position.x;
            // gameCore.world.cue.position.y = gameCore.world.balls[0].position.y + (gameCore.static.ballRadius * 2);
            gameCore.world.cue.position.z = (gameCore.world.balls[0].position.z - (gameCore.static.cueLength / 2) - 0.1);

            gameCore.world.cue.posAt(gameCore.world.balls[0]);
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);

            this.angle = 180;
            gameCore.inAnimation = false;
        });
    }
}