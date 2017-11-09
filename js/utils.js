class Utils {
    constructor() {
        console.log("utils constructor");
    }

    // calculate distance between objects
    calcDistance(object1, object2) {
        let dx = object2.position.x - object1.position.x;
        let dy = object2.position.z - object1.position.z;
        let dxSquared = dx * dx;
        let dySquared = dy * dy;
        let sum = dxSquared + dySquared;
        return Math.sqrt(sum);
    }

    calcOldDistance(object1, object2) {
        return Math.sqrt(Math.pow(object1.GetOldX - object2.GetOldX, 2) + Math.pow(object1.GetOldZ - object2.GetOldZ, 2));
    }
}