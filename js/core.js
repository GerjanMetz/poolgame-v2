class Core {
    constructor(){
        console.log("core constructor");
        this.init();
    }

    init() {
        this.ui = new UI();
        this.physics = new Physics();
        this.world = new World;
        this.events = new Events();
        this.utils = new Utils();
        this.static = new Static();
    }
}