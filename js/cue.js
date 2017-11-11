class Cue extends THREE.Mesh {
    constructor() {
        let cueGeometry = new THREE.CylinderGeometry(gameCore.static.cueTip, gameCore.static.cueButt, gameCore.static.cueLength);
        let cueMaterial = new THREE.MeshPhongMaterial();
        super(cueGeometry, cueMaterial);



        gameCore.scene.add(this);
    }

    pointAt(object) {
        this.position.x = object.position.x;
        this.position.y = object.position.y + (gameCore.static.ballRadius * 2);
        this.position.z = (object.position.z - (gameCore.static.cueLength / 2) - 0.1);

        this.rotation.x = 0;
        this.rotation.y = Math.PI / 2;
        this.rotation.z = (Math.PI / 2)+ 0.1;
    }
}