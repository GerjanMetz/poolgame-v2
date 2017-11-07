class Core {
    constructor(){
        console.log("core constructor");
        this.init();
    }

    init() {
        this.ui = new UI();
        this.physics = new Physics();
        this.world = new World;
        this.events = new Events();
        this.utils = new Utils();
        this.static = new Static();

        // setup renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        this.renderer.shadowMap.enabled = true;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.clock = new THREE.Clock();

        let boxGeo = new THREE.BoxGeometry(1, 1, 1);
        let boxMat = new THREE.MeshBasicMaterial();
        this.boxMesh = new THREE.Mesh(boxGeo, boxMat);
        this.scene.add(this.boxMesh);

        this.camera.position.x = 0;
        this.camera.position.y = 2.5;
        this.camera.position.z = 0;
        this.camera.lookAt(this.boxMesh.position);
    }

    gameLoop() {
        // request
        requestAnimationFrame( window.gameCore.gameLoop );
        gameCore.renderer.render(gameCore.scene, gameCore.camera);
        // update physics
        // render scene
    }
}