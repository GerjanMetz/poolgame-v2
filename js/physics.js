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
    }

    shootBall(mouseX, mouseZ) {
        gameCore.world.ball.SetSpeedX = (gameCore.world.ball.position.x - mouseX) * 0.0001;
        gameCore.world.ball.SetSpeedZ = (gameCore.world.ball.position.z - mouseZ) * 0.0001;
    }

    wallCollision() {
        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallTop.position.z - balls[i].position.z) &&
            Math.abs(wallTop.position.x - balls[i].position.x) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.z += -0.01;
            balls[i].SetZSpeed = balls[i].GetZSpeed * -1;
        }

        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallTopLeft.position.x - balls[i].position.x) &&
            Math.abs(wallTopLeft.position.z - balls[i].position.z) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.x += -0.01;
            balls[i].SetXSpeed = balls[i].GetXSpeed * -1;
        }

        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallTopRight.position.x - balls[i].position.x) &&
            Math.abs(wallTopRight.position.z - balls[i].position.z) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.x += 0.01;
            balls[i].SetXSpeed = balls[i].GetXSpeed * -1;
        }

        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallLowerLeft.position.x - balls[i].position.x) &&
            Math.abs(wallLowerLeft.position.z - balls[i].position.z) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.x += -0.01;
            balls[i].SetXSpeed = balls[i].GetXSpeed * -1;
        }

        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallLowerRight.position.x - balls[i].position.x) &&
            Math.abs(wallLowerRight.position.z - balls[i].position.z) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.x += 0.01;
            balls[i].SetXSpeed = balls[i].GetXSpeed * -1;
        }

        if (wallBodyDepth / 2 + ballRadius >= Math.abs(wallBottom.position.z - balls[i].position.z) &&
            Math.abs(wallBottom.position.x - balls[i].position.x) < wallBodyWidth / 2 + ballRadius)
        {
            balls[i].position.z += 0.01;
            balls[i].SetZSpeed = balls[i].GetZSpeed * -1;
        }

    }
}