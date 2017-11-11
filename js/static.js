class Static {
    constructor() {
        console.log("static constructor");

        // add bed dimensions
        this.bedWidth = 1.3716;
        this.bedHeight = 0.1;
        this.bedDepth = 2.7432;

        // add pocket dimensions
        this.pocketRadius = 0.0864;
        this.pocketHeight = 0.2;

        // add wall dimensions
        this.wallBodyWidth = 1.05;
        this.wallBodyHeight = 0.2;
        this.wallBodyDepth = 0.2;

        // add wall cube dimensions
        this.wallCubeWidth = 0.141421356;
        this.wallCubeHeight = 0.2;

        // add cue dimensions
        this.cueTip = 0.005;
        this.cueButt = 0.015;
        this.cueLength = 1.5;

        // add pocket position offset
        this.pocketPosY = -0.01;

        // add ball radius
        this.ballRadius = 0.054;

        // how many balls in game
        this.amountBalls = 16;
    }
}