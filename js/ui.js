class UI {
    constructor() {
        console.log("ui constructor");
    }

    hideAll() {
        this.hideStartScreen();
        this.hideEndScreen();
        this.hideDeathScreen();
        this.hideMenu();
    }

    showMenu() {
        this.hideAll();
        document.getElementById("menuScreen").style.visibility = "visible";
    }

    showStartScreen() {
        this.showMenu();
        document.getElementById("startScreen").style.position = "initial";
        document.getElementById("startScreen").style.visibility = "visible";
    }

    showEndScreen() {
        this.showMenu();
        document.getElementById("endScreen").style.position = "initial";
        document.getElementById("endScreen").style.visibility = "visible";
    }

    showDeathScreen() {
        this.showMenu();
        document.getElementById("deathScreen").style.position = "initial";
        document.getElementById("deathScreen").style.visibility = "visible";
    }


    hideMenu() {
        document.getElementById("menuScreen").style.visibility = "hidden";
    }

    hideStartScreen() {
        document.getElementById("startScreen").style.position = "none";
        document.getElementById("startScreen").style.visibility = "hidden";
    }

    hideEndScreen() {
        document.getElementById("endScreen").style.position = "none";
        document.getElementById("endScreen").style.visibility = "hidden";
    }

    hideDeathScreen() {
        document.getElementById("deathScreen").style.position = "none";
        document.getElementById("deathScreen").style.visibility = "hidden";
    }
}