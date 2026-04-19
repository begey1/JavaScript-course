let score = 0;
let time = 0;
let timer;
let correctColor;

function startGame(level) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    score = 0;

    if (level === "easy") time = 20;
    if (level === "medium") time = 15;
    if (level === "hard") time = 10;

    document.getElementById("time").textContent = time;
    document.getElementById("score").textContent = score;

    nextRound();

    timer = setInterval(() => {
        time--;
        document.getElementById("time").textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            alert("Гра закінчена! Очки: " + score);
        }
    }, 1000);
}

function nextRound() {
    let colors = ["red", "green", "blue"];
    correctColor = colors[Math.floor(Math.random() * 3)];

    document.querySelectorAll(".square").forEach(sq => {
        sq.style.opacity = "0.3";
    });

    document.getElementById(correctColor).style.opacity = "1";
}

function clickSquare(color) {
    if (color === correctColor) {
        score++;
        document.getElementById("score").textContent = score;
        nextRound();
    }
}

function restart() {
    location.reload();
}
