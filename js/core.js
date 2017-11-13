class Core {
    constructor(){
        console.log("core constructor");

        this.currentTurn = null;
        this.otherTurn = null;
        this.winner;
        this.loser;
    }

    init() {
        // setup renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        this.renderer.shadowMap.enabled = true;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.clock = new THREE.Clock();

        this.ui = new UI();
        this.physics = new Physics();
        this.events = new Events();
        this.utils = new Utils();
        this.static = new Static();
        this.player1 = new Player("p1");
        this.player2 = new Player("p2");
        this.world = new World();

        this.ui.showStartScreen();

        this.inAnimation = false;
        this.currentTurn = this.player1;
        this.otherTurn = this.player2;

        gameCore.world.cue.initCue(gameCore.world.balls[0]);

        let light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(1,3,1);

        light.castShadow = true;
        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;

        this.scene.add(light);

        this.camera.position.x = 0;
        this.camera.position.y = 2.5;
        this.camera.position.z = -0.00001;
        this.camera.lookAt(this.world.table.bed.position);
    }

    flipCurrentTurn() {
        if (this.currentTurn === this.player1) {
            this.otherTurn = this.player1;
            this.currentTurn = this.player2;
        } else {
            this.currentTurn = this.player1;
            this.otherTurn = this.player2;
        }
    }

    gameLoop() {
        // request
        requestAnimationFrame( window.gameCore.gameLoop );
        gameCore.renderer.render(gameCore.scene, gameCore.camera);


        // update physics
        gameCore.physics.update();
        // render scene
    }
}