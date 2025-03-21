function toggleInfo() {
    let infoBox = document.getElementById("infoBox");
    infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
}

function toggleFacts() {
    let factsBox = document.getElementById("factsBox");
    factsBox.style.display = factsBox.style.display === "block" ? "none" : "block";
}

document.getElementById("toggleSound").addEventListener("click", function () {
    let audio = new Audio("../audio/jupiter.mp3");
    audio.play();
});
