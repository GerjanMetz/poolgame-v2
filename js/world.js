class World {
    constructor() {
        console.log("world constructor");

        this.balls = [];

        this.table = new Table();
        this.cue = new Cue();


        this.createBalls(gameCore.static.amountBalls);
        this.setupBalls();
        this.createFloor();

    }

    createBalls(amountBalls) {
        for (let i = 0; i < amountBalls; i++) {
            this.balls.push(new Ball(i));
            this.balls[i].position.z = (gameCore.static.bedDepth / 3) * -1 + (i * 0.13);
            this.balls[i].position.y = (gameCore.static.bedHeight / 2 + gameCore.static.ballRadius);

            this.balls[i].initBall();

            gameCore.scene.add(this.balls[i]);
        }
    }

    createFloor() {
        let path = "./img/floor-texture-1.jpg";
        let texture = new THREE.TextureLoader().load(path);


        let geometrySceneFloor = new THREE.PlaneGeometry(11, 11, 32);
        let materialSceneFloor = new THREE.MeshPhongMaterial( { map: texture, side: THREE.DoubleSide } );
        let sceneFloor = new THREE.Mesh(geometrySceneFloor, materialSceneFloor);

        sceneFloor.position.set(0,-1,0);
        sceneFloor.rotation.x = Math.PI / 2;

        sceneFloor.receiveShadow = false;

        gameCore.scene.add(sceneFloor);
    }

    setupBalls() {
        this.balls[0].position.set(0, gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, (gameCore.static.bedDepth / 3) * -1);

        this.balls[1].position.set(0, gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, gameCore.static.bedDepth / 4);

        this.balls[11].position.set(this.balls[1].position.x + (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (1 * 0.096));
        this.balls[10].position.set(this.balls[1].position.x - (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (1 * 0.096));

        this.balls[9].position.set(this.balls[1].position.x + (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));
        this.balls[8].position.set(this.balls[1].position.x + (0 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));
        this.balls[6].position.set(this.balls[1].position.x - (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (2 * 0.096));

        this.balls[5].position.set(this.balls[1].position.x + (3 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[12].position.set(this.balls[1].position.x + (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[7].position.set(this.balls[1].position.x - (1 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));
        this.balls[13].position.set(this.balls[1].position.x - (3 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (3 * 0.096));

        this.balls[15].position.set(this.balls[1].position.x + (4 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[2].position.set(this.balls[1].position.x + (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[14].position.set(this.balls[1].position.x - (0 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[3].position.set(this.balls[1].position.x - (2 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
        this.balls[4].position.set(this.balls[1].position.x - (4 * 0.055), gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, this.balls[1].position.z + (4 * 0.096));
    }

    resetBall() {
        this.balls[0].position.set(0, gameCore.static.bedHeight / 2 + gameCore.static.ballRadius, (gameCore.static.bedDepth / 3) * -1);

        this.balls[0].SetSpeedX = 0;
        this.balls[0].SetSpeedZ = 0;

        this.balls[0].isPutted = false;

        // window.dispatchEvent(new Event('endTurn'));
    }
}