// Super Power Game - Basic Logic

let score = 0;

const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
    score = score + 1;
    alert("⚡ Power Activated!\nScore: " + score);
});
