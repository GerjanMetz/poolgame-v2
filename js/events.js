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

            console.log("onclick");
            console.log("X: " + event.clientX);
            console.log("Y: " + event.clientY);

            let mouseXOffset = window.innerWidth / 2;
            let mouseYOffset = window.innerHeight / 2;

            console.log("offsetX: " + (event.clientX - mouseXOffset));
            console.log("offsetY: " + (event.clientY - mouseYOffset));

            // gameCore.physics.shootBall(e.clientX - mouseXOffset, e.clientY - mouseYOffset);

            gameCore.world.balls[0].SetSpeedZ = 0.08;
        });

        window.addEventListener('mousemove', (event) => {
            console.log("mouseX: ", event.clientX);
            console.log("mouseY: ", event.clientY);
        });

        window.addEventListener('endTurn', () => {
            console.log("endTurn");
        });
    }
}