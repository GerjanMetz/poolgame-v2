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
}