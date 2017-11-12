class Ball extends THREE.Mesh{
    constructor(number){
        console.log("ball constructor");
        let ballMaterial;

        if (number > 0) {
            let path = './img/PoolBall' + number + '.jpg';
            let texture = new THREE.TextureLoader().load(path);

            ballMaterial = new THREE.MeshPhongMaterial({  map: texture });

        } else {
            ballMaterial = new THREE.MeshPhongMaterial({ color: 0xdddddd });
        }

        let ballGeometry = new THREE.SphereGeometry(gameCore.static.ballRadius);
        super(ballGeometry, ballMaterial);

        this.number = number;

        if (number >= 9) { this.color = "half" } else { this.color = "full" }

        this.speedX = 0.0;
        this.speedZ = 0.0;
        this.mass = 1;
        this.Colliding = false;
        this.isPutted = false;

        this.oldPosX = 0;
        this.oldPosZ = 0;

        this.receiveShadow = true;
        this.castShadow = true;

        gameCore.scene.add(this);
    }

    initBall() {
        this.rotation.x = Math.PI / 2;
        this.rotation.y = Math.PI / 2;
    }

    get GetSpeedX() {
        return this.speedX;
    }

    get GetSpeedZ() {
        return this.speedZ;
    }

    get GetVelocity() {
        return Math.sqrt(this.speedX * this.speedX + this.speedZ * this.speedZ);
    }

    get GetDirection() {
        return Math.atan2(this.speedZ, this.speedX);
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

    set SetSpeedX(value){
        this.speedX = value;
    }

    set SetSpeedZ(value){
        this.speedZ = value;
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