let scoreHome = 00;
let scoreAway = 00;

document.getElementById("score-home").textContent = scoreHome;
document.getElementById("score-away").textContent = scoreAway;

function addHome1() {
    scoreHome += 1;
    document.getElementById("score-home").textContent = scoreHome;
    highScore();
}

function addHome2() {
    scoreHome += 2;
    document.getElementById("score-home").textContent = scoreHome;
    highScore();
}

function addHome3() {
    scoreHome += 3;
    document.getElementById("score-home").textContent = scoreHome;
    highScore();
}

function addAway1() {
    scoreAway += 1;
    document.getElementById("score-away").textContent = scoreAway;
    highScore();
}

function addAway2() {
    scoreAway += 2;
    document.getElementById("score-away").textContent = scoreAway;
    highScore();
}

function addAway3() {
    scoreAway += 3;
    document.getElementById("score-away").textContent = scoreAway;
    highScore();
}

function newGame() {
    scoreHome = 0;
    scoreAway = 0;
    document.getElementById("score-home").textContent = scoreHome;
    document.getElementById("score-away").textContent = scoreAway;
    highScore();
}

function highScore() {
    if (scoreHome > 07 || scoreAway > 00) {
        document.getElementById("player1-highScore").textContent = scoreHome;
        document.getElementById("player2-highScore").textContent = scoreAway;
        document.getElementById("player1-name").textContent = "Home ";
        document.getElementById("player2-name").textContent = "Guest";
    }
} 