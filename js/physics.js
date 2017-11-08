class Physics {
    constructor() {
        console.log("physics constructor");
    }

    update() {
        let delta = 60 * gameCore.clock.getDelta();

        if(delta > 16.6) { delta = 16 };

        gameCore.world.ball.SetOldX = gameCore.world.ball.position.x;
        gameCore.world.ball.SetOldZ = gameCore.world.ball.position.z;

        gameCore.world.ball.position.x += gameCore.world.ball.GetSpeedX * delta;
        gameCore.world.ball.position.z += gameCore.world.ball.GetSpeedZ * delta;

        this.wallCollision();
    }

    shootBall(mouseX, mouseZ) {
        gameCore.world.ball.SetSpeedX = (gameCore.world.ball.position.x - mouseX) * 0.0001;
        gameCore.world.ball.SetSpeedZ = (gameCore.world.ball.position.z - mouseZ) * 0.0001;
    }

    wallCollision() {
        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTop.position.z - gameCore.world.ball.position.z) &&
            Math.abs(gameCore.world.table.wallTop.position.x - gameCore.world.ball.position.x) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.z += -0.01;
            gameCore.world.ball.SetSpeedZ = gameCore.world.ball.GetSpeedZ * -1;
        }

        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTopLeft.position.x - gameCore.world.ball.position.x) &&
            Math.abs(gameCore.world.table.wallTopLeft.position.z - gameCore.world.ball.position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.x += -0.01;
            gameCore.world.ball.SetSpeedX = gameCore.world.ball.GetSpeedX * -1;
        }

        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTopRight.position.x - gameCore.world.ball.position.x) &&
            Math.abs(gameCore.world.table.wallTopRight.position.z - gameCore.world.ball.position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.x += 0.01;
            gameCore.world.ball.SetSpeedX = gameCore.world.ball.GetSpeedX * -1;
        }

        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallLowerLeft.position.x - gameCore.world.ball.position.x) &&
            Math.abs(gameCore.world.table.wallLowerLeft.position.z - gameCore.world.ball.position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.x += -0.01;
            gameCore.world.ball.SetSpeedX = gameCore.world.ball.GetSpeedX * -1;
        }

        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallLowerRight.position.x - gameCore.world.ball.position.x) &&
            Math.abs(gameCore.world.table.wallLowerRight.position.z - gameCore.world.ball.position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.x += 0.01;
            gameCore.world.ball.SetSpeedX = gameCore.world.ball.GetSpeedX * -1;
        }

        if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallBottom.position.z - gameCore.world.ball.position.z) &&
            Math.abs(gameCore.world.table.wallBottom.position.x - gameCore.world.ball.position.x) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius)
        {
            gameCore.world.ball.position.z += 0.01;
            gameCore.world.ball.SetSpeedZ = gameCore.world.ball.GetSpeedZ * -1;
        }

    }
}