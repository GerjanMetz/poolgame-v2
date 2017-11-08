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

        window.addEventListener('click', (e) => {
            console.log("onclick");
            console.log("X: " + e.clientX);
            console.log("Y: " + e.clientY);

            let mouseXOffset = window.innerWidth / 2;
            let mouseYOffset = window.innerHeight / 2;

            console.log("offsetX: " + (e.clientX - mouseXOffset));
            console.log("offsetY: " + (e.clientY - mouseYOffset));



            gameCore.physics.shootBall(e.clientX - mouseXOffset, e.clientY - mouseYOffset);
        });
    }
}