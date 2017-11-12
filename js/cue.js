class Cue extends THREE.Mesh {
    constructor() {
        let cueGeometry = new THREE.CylinderGeometry(gameCore.static.cueTip, gameCore.static.cueButt, gameCore.static.cueLength);
        let cueMaterial = new THREE.MeshPhongMaterial();
        super(cueGeometry, cueMaterial);

        gameCore.scene.add(this);
    }

    initCue(object) {
        let offset = Math.PI / 2;

        this.position.y = object.position.y + gameCore.static.ballRadius;

        this.rotation.x = 0.05;
        this.rotation.y = offset;
        this.rotation.z = offset;

        this.position.z = gameCore.world.balls[0].position.z - (gameCore.static.cueLength / 2) - 0.1;
    }

    pointAt(object) {
        let offset = Math.PI / 2;

        let dx = object.position.x - this.position.x;
        let dy = object.position.y - this.position.y;
        let dz = object.position.z - this.position.z;

        let horAngle = Math.atan2(dx, dz);

        this.rotation.y = horAngle + offset;
    }

    posAt(object) {
        this.position.x = object.position.x;
        this.position.z = object.position.z - (gameCore.static.cueLength / 2) - 0.1;
    }
}