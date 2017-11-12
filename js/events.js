class Events {
    constructor() {
        console.log("events constructor");

        gameCore.controls.mouseButtons.ORBIT = THREE.MOUSE.RIGHT;
        gameCore.controls.mouseButtons.PAN = null;

        window.addEventListener('resize', () => {
            gameCore.camera.aspect = window.innerWidth / window.innerHeight;
            gameCore.camera.updateProjectionMatrix();
            gameCore.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        window.addEventListener('click', (event) => {
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


            console.log("mouseX: ", event.movementX);
            // console.log("mouseY: ", event.clientY);
            let rotSpeed = Math.abs(event.movementX )* 0.005;
            let x = gameCore.world.cue.position.x;
            let z = gameCore.world.cue.position.z;

            // console.log(event);

            if (event.movementX > 0){
                gameCore.world.cue.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
                gameCore.world.cue.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
            } else if (event.movementX < 0){
                gameCore.world.cue.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
                gameCore.world.cue.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
            }

            // gameCore.world.cue.position.x += (event.movementX * 0.005) * -1;
            // gameCore.world.cue.position.z -= (event.movementX * 0.005) * -1;
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);
        });

        window.addEventListener('endTurn', () => {
            console.log("endTurn");

            // gameCore.world.cue.position.x = gameCore.world.balls[0].position.x;
            // gameCore.world.cue.position.y = gameCore.world.balls[0].position.y + (gameCore.static.ballRadius * 2);
            // gameCore.world.cue.position.z = (gameCore.world.balls[0].position.z - (gameCore.static.cueLength / 2) - 0.1);

            gameCore.world.cue.posAt(gameCore.world.balls[0]);
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);

            gameCore.inAnimation = false;
        });
    }
}