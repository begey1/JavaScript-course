let score = 0;
let timeLeft = 0;
let clickTime = 0;
let timer;
let square = document.getElementById("square");

function startGame() {
    let difficulty = document.getElementById("difficulty").value;
    let color = document.getElementById("color").value;

    if (color === "") {
        alert("Вибери колір!");
        return;
    }

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    square.style.background = color;

    if (difficulty === "easy") clickTime = 5;
    if (difficulty === "normal") clickTime = 2;
    if (difficulty === "hard") clickTime = 1;

    moveSquare();
}

function moveSquare() {
    let x = Math.random() * (window.innerWidth - 60);
    let y = Math.random() * (window.innerHeight - 60);

    square.style.left = x + "px";
    square.style.top = y + "px";

    timeLeft = clickTime;
    document.getElementById("time").textContent = timeLeft;

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft -= 0.1;
        document.getElementById("time").textContent = timeLeft.toFixed(1);

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Game Over! Score: " + score);
        }
    }, 100);
}

square.addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = score;
    moveSquare();
});
