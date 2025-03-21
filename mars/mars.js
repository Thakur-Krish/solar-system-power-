function toggleInfo() {
    let infoBox = document.getElementById("infoBox");
    infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
}

function toggleFacts() {
    let factsBox = document.getElementById("factsBox");
    factsBox.style.display = factsBox.style.display === "block" ? "none" : "block";
}

let audio = document.getElementById("marsSound");
let button = document.getElementById("toggleSound");
button.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        button.innerText = "🔇 Stop Mars Sound";
    } else {
        audio.pause();
        audio.currentTime = 0;
        button.innerText = "🔊 Play Mars Sound";
    }
});
