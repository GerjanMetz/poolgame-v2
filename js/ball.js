class Ball extends THREE.Mesh{
    constructor(){
        console.log("ball constructor");

        let ballGeometry = new THREE.SphereGeometry(gameCore.static.ballRadius);
        let ballMaterial = new THREE.MeshPhongMaterial({ });
        super(ballGeometry, ballMaterial);

        this.xSpeed = 0.0;
        this.zSpeed = 0.0;
        this.mass = 1;
        this.Colliding = false;

        this.oldPosX = 0;
        this.oldPosZ = 0;

        this.receiveShadow = true;
        this.castShadow = true;

        gameCore.scene.add(this);
    }

    get GetXSpeed() {
        return this.xSpeed;
    }

    get GetZSpeed() {
        return this.zSpeed;
    }

    get GetVelocity() {
        return Math.sqrt(this.xSpeed * this.xSpeed +  this.zSpeed * this.zSpeed);
    }

    get GetDirection() {
        return Math.atan2(this.zSpeed, this.xSpeed);
    }

    get GetMass() {
        return this.mass;
    }

    get isColliding() {
        return this.Colliding;
    }

    get GetOldX() {
        return this.oldPosX;
    }

    get GetOldZ() {
        return this.oldPosZ;
    }

    set SetXSpeed(value){
        this.xSpeed = value;
    }

    set SetZSpeed(value){
        this.zSpeed = value;
    }

    set isColliding(value) {
        this.Colliding = value;
    }

    set SetOldX(value) {
        this.oldPosX = value;
    }

    set SetOldZ(value) {
        this.oldPosZ = value;
    }
}