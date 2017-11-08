class Table {
    constructor() {
        console.log("table constructor");

        this.pockets = [];

        this.createTableElements();
        this.buildTable();
    }

    createTableElements() {
        // create bed
        let bedGeometry = new THREE.BoxGeometry(gameCore.static.bedWidth, gameCore.static.bedHeight, gameCore.static.bedDepth);
        let bedMaterial = new THREE.MeshPhongMaterial({ color: "blue" });
        this.bed = new THREE.Mesh(bedGeometry, bedMaterial);

        // create wall elements
        let wallBoxGeometry = new THREE.BoxGeometry(gameCore.static.wallBodyWidth, gameCore.static.wallBodyHeight, gameCore.static.wallBodyDepth);
        let wallCubeGeometry = new THREE.BoxGeometry(gameCore.static.wallCubeWidth, gameCore.static.wallCubeHeight, gameCore.static.wallCubeWidth);
        let wallMaterial = new THREE.MeshPhongMaterial({ color: "green" });
        this.wallBody = new THREE.Mesh(wallBoxGeometry, wallMaterial);
        this.wallCube1 = new THREE.Mesh(wallCubeGeometry, wallMaterial);
        this.wallCube2 = new THREE.Mesh(wallCubeGeometry, wallMaterial);

        // give wall cube names
        this.wallCube1.name = "wallCube1";
        this.wallCube2.name = "wallCube2";

        // position and rotate wallcubes
        this.wallCube1.rotation.y = Math.PI / 4;
        this.wallCube1.position.x = gameCore.static.wallBodyWidth / 2;
        this.wallCube2.rotation.y = Math.PI / 4;
        this.wallCube2.position.x = (gameCore.static.wallBodyWidth / 2) * -1;

        // make group of wallbody and wallcubes
        let wall = new THREE.Group();
        wall.add(this.wallBody);
        wall.add(this.wallCube1);
        wall.add(this.wallCube2);

        // create walls
        this.wallTop = wall.clone();
        this.wallTopLeft = wall.clone();
        this.wallTopRight = wall.clone();
        this.wallLowerLeft = wall.clone();
        this.wallLowerRight = wall.clone();
        this.wallBottom = wall.clone();

        // create pocket elements
        let pocketGeometry = new THREE.CylinderGeometry(gameCore.static.pocketRadius, gameCore.static.pocketRadius, gameCore.static.pocketHeight);
        let pocketMaterial = new THREE.MeshPhongMaterial({ color: "orange" });
        let pocket = new THREE.Mesh(pocketGeometry, pocketMaterial);

        // create pockets
        this.pocketUpperLeft = pocket.clone();
        this.pocketUpperRight = pocket.clone();
        this.pocketMidLeft = pocket.clone();
        this.pocketMidRight = pocket.clone();
        this.pocketLowerLeft = pocket.clone();
        this.pocketLowerRight = pocket.clone();




        // add pockets to array
        this.pockets[0] = this.pocketUpperLeft;
        this.pockets[1] = this.pocketUpperRight;
        this.pockets[2] = this.pocketMidLeft;
        this.pockets[3] = this.pocketMidRight;
        this.pockets[4] = this.pocketLowerLeft;
        this.pockets[5] = this.pocketLowerRight;

    }

    buildTable() {
        // position walls
        this.wallTop.position.z = 1.45;

        this.wallTopLeft.rotation.y = Math.PI / 2;
        this.wallTopLeft.position.x = gameCore.static.bedWidth / 2 + 0.08;
        this.wallTopLeft.position.z = gameCore.static.bedWidth / 2;

        this.wallTopRight.rotation.y = Math.PI / 2;
        this.wallTopRight.position.x = (gameCore.static.bedWidth / 2 + 0.08) * -1;
        this.wallTopRight.position.z = gameCore.static.bedWidth / 2;

        this.wallLowerLeft.rotation.y = Math.PI / 2;
        this.wallLowerLeft.position.x = gameCore.static.bedWidth / 2 + 0.08;
        this.wallLowerLeft.position.z = (gameCore.static.bedWidth / 2) * -1;

        this.wallLowerRight.rotation.y = Math.PI / 2;
        this.wallLowerRight.position.x = (gameCore.static.bedWidth / 2 + 0.08) * -1;
        this.wallLowerRight.position.z = (gameCore.static.bedWidth / 2) * -1;

        this.wallBottom.position.z = -1.45;


        // position pockets
        this.pocketUpperLeft.position.x = gameCore.static.bedWidth / 2;
        this.pocketUpperLeft.position.z = gameCore.static.bedDepth / 2;
        this.pocketUpperLeft.position.y = gameCore.static.pocketPosY;

        this.pocketUpperRight.position.x = (gameCore.static.bedWidth / 2) * -1;
        this.pocketUpperRight.position.z = gameCore.static.bedDepth / 2;
        this.pocketUpperRight.position.y = gameCore.static.pocketPosY;

        this.pocketMidLeft.position.x = 0.77;
        this.pocketMidLeft.position.z = 0;
        this.pocketMidLeft.position.y = gameCore.static.pocketPosY;

        this.pocketMidRight.position.x = -0.77;
        this.pocketMidRight.position.z = 0;
        this.pocketMidRight.position.y = gameCore.static.pocketPosY;

        this.pocketLowerLeft.position.x = gameCore.static.bedWidth / 2;
        this.pocketLowerLeft.position.z = (gameCore.static.bedDepth / 2) * -1;
        this.pocketLowerLeft.position.y = gameCore.static.pocketPosY;

        this.pocketLowerRight.position.x = (gameCore.static.bedWidth / 2) * -1;
        this.pocketLowerRight.position.z = (gameCore.static.bedDepth / 2) * -1;
        this.pocketLowerRight.position.y = gameCore.static.pocketPosY;

        // new group for pooltable
        this.poolTable = new THREE.Group();

        this.poolTable.add(this.bed);
        this.poolTable.add(this.pocketUpperLeft);
        this.poolTable.add(this.pocketUpperRight);
        this.poolTable.add(this.pocketMidLeft);
        this.poolTable.add(this.pocketMidRight);
        this.poolTable.add(this.pocketLowerLeft);
        this.poolTable.add(this.pocketLowerRight);
        this.poolTable.add(this.wallTop);
        this.poolTable.add(this.wallTopLeft);
        this.poolTable.add(this.wallTopRight);
        this.poolTable.add(this.wallLowerLeft);
        this.poolTable.add(this.wallLowerRight);
        this.poolTable.add(this.wallBottom);


        // add to scene
        gameCore.scene.add(
            this.bed,
            this.pocketUpperLeft,
            this.pocketUpperRight,
            this.pocketMidLeft,
            this.pocketMidRight,
            this.pocketLowerLeft,
            this.pocketLowerRight,
            this.wallTop,
            this.wallTopLeft,
            this.wallTopRight,
            this.wallLowerLeft,
            this.wallLowerRight,
            this.wallBottom);
    }
}