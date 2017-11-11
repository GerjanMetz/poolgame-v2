class Cue extends THREE.Mesh {
    constructor() {
        let cueGeometry = new THREE.CylinderGeometry(0.005, 0.015, 1);
        let cueMaterial = new THREE.MeshPhongMaterial();
        super(cueGeometry, cueMaterial);

        gameCore.scene.add(this);
    }
}