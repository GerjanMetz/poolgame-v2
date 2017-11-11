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

            // console.log("onclick");
            // console.log("X: " + event.clientX);
            // console.log("Y: " + event.clientY);
            //
            // let mouseXOffset = window.innerWidth / 2;
            // let mouseYOffset = window.innerHeight / 2;
            //
            // console.log("offsetX: " + (event.clientX - mouseXOffset));
            // console.log("offsetY: " + (event.clientY - mouseYOffset));
            //
            // // gameCore.physics.shootBall(e.clientX - mouseXOffset, e.clientY - mouseYOffset);
            //
            // gameCore.world.balls[0].SetSpeedZ = 0.08;

            gameCore.world.cue.pointAt(gameCore.world.balls[0]);
        });

        window.addEventListener('mousemove', (event) => {
            console.log("mouseX: ", event.movementX);
            // console.log("mouseY: ", event.clientY);

            // console.log(event);

            gameCore.world.cue.position.x += event.movementX * 0.001;
            gameCore.world.cue.pointAt(gameCore.world.balls[0]);
        });

        window.addEventListener('endTurn', () => {
            console.log("endTurn");
        });
    }
}