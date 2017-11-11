class Cue extends THREE.Mesh {
    constructor() {
        let cueGeometry = new THREE.CylinderGeometry(gameCore.static.cueTip, gameCore.static.cueButt, gameCore.static.cueLength);
        let cueMaterial = new THREE.MeshPhongMaterial();
        super(cueGeometry, cueMaterial);



        gameCore.scene.add(this);
    }

    initPos(object) {
        let offset = Math.PI / 2;

        this.position.x = 1;
        this.position.y = object.position.y;
        this.position.z = 1;

        this.rotation.x = 0;
        this.rotation.y = offset;
        this.rotation.z = offset;
    }

    pointAt(object) {
        let offset = Math.PI / 2;

        // this.position.x = object.position.x;
        // this.position.y = object.position.y + (gameCore.static.ballRadius * 2);
        // this.position.z = (object.position.z - (gameCore.static.cueLength / 2) - 0.1);

        // this.position.x = 0;
        // this.position.y = object.position.y;
        // this.position.z = 0;
        let dx = object.position.x - this.position.x;
        let dy = object.position.z - this.position.z;

        console.log(dx);console.log(dy);

        let angle = Math.atan2(dx, dy);
        console.log(angle);

        this.rotation.y = angle + offset;
    }
}