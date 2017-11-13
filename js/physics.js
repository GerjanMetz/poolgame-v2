class Physics {
    constructor() {
        console.log("physics constructor");
    }

    update() {
        let delta = 60 * gameCore.clock.getDelta();
        // console.log(delta);

        if(delta > 16.6) { delta = 16 }

        for (let i = 0; i < gameCore.static.amountBalls; i++) {
            // set current position for collision calculations
            gameCore.world.balls[i].SetOldX = gameCore.world.balls[i].position.x;
            gameCore.world.balls[i].SetOldZ = gameCore.world.balls[i].position.z;

            // set new position
            gameCore.world.balls[i].position.x += gameCore.world.balls[i].GetSpeedX * delta;
            gameCore.world.balls[i].position.z += gameCore.world.balls[i].GetSpeedZ * delta;


            // reduce velocity
            if (gameCore.world.balls[i].GetVelocity > 0.0005) {
                gameCore.world.balls[i].SetSpeedX = gameCore.world.balls[i].GetSpeedX * 0.99;
                gameCore.world.balls[i].SetSpeedZ = gameCore.world.balls[i].GetSpeedZ * 0.99;
            } else if (gameCore.world.balls[i].GetVelocity === 0) {
                // console.log("balls stopped");
            } else {
                // console.log("stopping balls");

                // set velocity to 0
                gameCore.world.balls[i].SetSpeedX = 0;
                gameCore.world.balls[i].SetSpeedZ = 0;

                let totalVelocity = 0;

                for (let j = 0; j < gameCore.static.amountBalls; j++){
                    totalVelocity += gameCore.world.balls[j].GetVelocity;
                }

                if (totalVelocity === 0) {
                    window.dispatchEvent(new Event('endTurn'));
                }
            }
        }

        this.wallCollision();
        this.ballCollision();
        this.pocketCollision();
    }


    wallCollision() {
        for (let i = 0; i < gameCore.static.amountBalls; i++) {

            // very long if statements that basically say. if the depth of the wall + radius of the ball is greater or equal to the distance between each other. then its a collision.
            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTop.position.z - gameCore.world.balls[i].position.z) &&
                Math.abs(gameCore.world.table.wallTop.position.x - gameCore.world.balls[i].position.x) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallTop.position.z - gameCore.world.balls[i].oldPosZ) > Math.abs(gameCore.world.table.wallTop.position.z - gameCore.world.balls[i].position.z))
            {
                // gameCore.world.balls[i].position.z += -0.01;
                gameCore.world.balls[i].SetSpeedZ = gameCore.world.balls[i].GetSpeedZ * -1;
            }

            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTopLeft.position.x - gameCore.world.balls[i].position.x) &&
                Math.abs(gameCore.world.table.wallTopLeft.position.z - gameCore.world.balls[i].position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallTopLeft.position.x - gameCore.world.balls[i].oldPosX) > Math.abs(gameCore.world.table.wallTopLeft.position.x - gameCore.world.balls[i].position.x))
            {
                // gameCore.world.balls[i].position.x += -0.01;
                gameCore.world.balls[i].SetSpeedX = gameCore.world.balls[i].GetSpeedX * -1;
            }

            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallTopRight.position.x - gameCore.world.balls[i].position.x) &&
                Math.abs(gameCore.world.table.wallTopRight.position.z - gameCore.world.balls[i].position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallTopRight.position.x - gameCore.world.balls[i].oldPosX) > Math.abs(gameCore.world.table.wallTopRight.position.x - gameCore.world.balls[i].position.x))
            {
                // gameCore.world.balls[i].position.x += 0.01;
                gameCore.world.balls[i].SetSpeedX = gameCore.world.balls[i].GetSpeedX * -1;
            }

            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallLowerLeft.position.x - gameCore.world.balls[i].position.x) &&
                Math.abs(gameCore.world.table.wallLowerLeft.position.z - gameCore.world.balls[i].position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallLowerLeft.position.x - gameCore.world.balls[i].oldPosX) > Math.abs(gameCore.world.table.wallLowerLeft.position.x - gameCore.world.balls[i].position.x))
            {
                // gameCore.world.balls[i].position.x += -0.01;
                gameCore.world.balls[i].SetSpeedX = gameCore.world.balls[i].GetSpeedX * -1;
            }

            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallLowerRight.position.x - gameCore.world.balls[i].position.x) &&
                Math.abs(gameCore.world.table.wallLowerRight.position.z - gameCore.world.balls[i].position.z) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallLowerRight.position.x - gameCore.world.balls[i].oldPosX) > Math.abs(gameCore.world.table.wallLowerRight.position.x - gameCore.world.balls[i].position.x))
            {
                // gameCore.world.balls[i].position.x += 0.01;
                gameCore.world.balls[i].SetSpeedX = gameCore.world.balls[i].GetSpeedX * -1;
            }

            if (gameCore.static.wallBodyDepth / 2 + gameCore.static.ballRadius >= Math.abs(gameCore.world.table.wallBottom.position.z - gameCore.world.balls[i].position.z) &&
                Math.abs(gameCore.world.table.wallBottom.position.x - gameCore.world.balls[i].position.x) < gameCore.static.wallBodyWidth / 2 + gameCore.static.ballRadius &&
                Math.abs(gameCore.world.table.wallBottom.position.z - gameCore.world.balls[i].oldPosZ) > Math.abs(gameCore.world.table.wallBottom.position.z - gameCore.world.balls[i].position.z)) {
                // gameCore.world.balls[i].position.z += 0.01;
                gameCore.world.balls[i].SetSpeedZ = gameCore.world.balls[i].GetSpeedZ * -1;
            }
        }
    }

    ballCollision() {
        for(let i = 0; i < gameCore.static.amountBalls; i++) {
            for(let j = i + 1; j < gameCore.static.amountBalls; j++) {
                if (gameCore.utils.calcDistance(gameCore.world.balls[i], gameCore.world.balls[j]) < gameCore.static.ballRadius * 2 && gameCore.world.balls[i].isColliding === false && gameCore.world.balls[j].isColliding === false &&
                    gameCore.utils.calcDistance(gameCore.world.balls[i], gameCore.world.balls[j]) < gameCore.utils.calcOldDistance(gameCore.world.balls[i], gameCore.world.balls[j])) {

                    // console.log("collision");

                    let dx = gameCore.world.balls[i].position.x - gameCore.world.balls[j].position.x;
                    let dz = gameCore.world.balls[i].position.z - gameCore.world.balls[j].position.z;

                    let contactAngle = Math.atan2(dz, dx);

                    let totalVelocityA = gameCore.world.balls[i].GetVelocity;
                    let totalVelocityB = gameCore.world.balls[j].GetVelocity;
                    let angleA = Math.atan2(gameCore.world.balls[i].GetSpeedZ, gameCore.world.balls[i].GetSpeedX);
                    let angleB = Math.atan2(gameCore.world.balls[j].GetSpeedZ, gameCore.world.balls[j].GetSpeedX);

                    gameCore.world.balls[i].SetSpeedX = totalVelocityB * Math.cos(angleB - contactAngle) * Math.cos(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
                    gameCore.world.balls[i].SetSpeedZ = totalVelocityB * Math.cos(angleB - contactAngle) * Math.sin(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));

                    gameCore.world.balls[j].SetSpeedX = totalVelocityA * Math.cos(angleA - contactAngle) * Math.cos(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
                    gameCore.world.balls[j].SetSpeedZ = totalVelocityA * Math.cos(angleA - contactAngle) * Math.sin(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));

                    gameCore.world.balls[i].isColliding = true;
                    gameCore.world.balls[j].isColliding = true;

                }
                else if (gameCore.utils.calcDistance(gameCore.world.balls[i], gameCore.world.balls[j]) > gameCore.static.ballRadius * 2 + 0.001) {
                    gameCore.world.balls[i].isColliding = false;
                    gameCore.world.balls[j].isColliding = false;
                }
            }
        }
    }

    pocketCollision() {
        for(let i = 0; i < gameCore.static.amountBalls; i++){
            for(let j = 0; j < 6; j++){
                if(gameCore.utils.calcDistance(gameCore.world.balls[i], gameCore.world.table.pockets[j]) < gameCore.static.ballRadius + gameCore.static.pocketRadius){
                    // if (i === 0) { gameCore.world.resetBall(); continue; }

                    gameCore.world.balls[i].isPutted = true;

                    gameCore.world.balls[i].SetSpeedX = 0;
                    gameCore.world.balls[i].SetSpeedZ = 0;

                    gameCore.world.balls[i].position.x = 1.5;
                    gameCore.world.balls[i].position.z = (i * 0.13) - gameCore.static.bedDepth / 3;

                    window.dispatchEvent(new CustomEvent('ballPutted', { detail: gameCore.world.balls[i] }));
                }
            }
        }
    }
}