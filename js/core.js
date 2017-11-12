class Core {
    constructor(){
        console.log("core constructor");
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
        this.player1 = new Player();
        this.world = new World();

        this.inAnimation = false;

        gameCore.world.cue.initCue(gameCore.world.balls[0]);

        let light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(1,3,1);
        this.scene.add(light);

        this.camera.position.x = 0;
        this.camera.position.y = 2.5;
        this.camera.position.z = -0.00001;
        this.camera.lookAt(this.world.table.bed.position);
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