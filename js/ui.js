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
        document.getElementById("startScreen").style.display = "initial";
        document.getElementById("startScreen").style.visibility = "visible";
    }

    showEndScreen() {
        this.showMenu();
        document.getElementById("endScreenTitle").innerHTML = "Winner Winner Chicken Dinner for " + gameCore.winner.name + "!";

        document.getElementById("endScreen").style.display = "initial";
        document.getElementById("endScreen").style.visibility = "visible";
    }

    showDeathScreen() {
        this.showMenu();

        document.getElementById("deathScreenTitle").innerHTML = "Oh oh, seems like " + gameCore.loser.name + " has prematurely scored the 8ball... And therefore he lost!";

        document.getElementById("deathScreen").style.display = "initial";
        document.getElementById("deathScreen").style.visibility = "visible";
    }


    hideMenu() {
        document.getElementById("menuScreen").style.visibility = "hidden";
    }

    hideStartScreen() {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("startScreen").style.visibility = "hidden";
    }

    hideEndScreen() {
        document.getElementById("endScreen").style.display = "none";
        document.getElementById("endScreen").style.visibility = "hidden";
    }

    hideDeathScreen() {
        document.getElementById("deathScreen").style.display = "none";
        document.getElementById("deathScreen").style.visibility = "hidden";
    }
}