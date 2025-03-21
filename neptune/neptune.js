function toggleInfo() {
    let infoBox = document.getElementById("infoBox");
    infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
}

function toggleFacts() {
    let factsBox = document.getElementById("factsBox");
    factsBox.style.display = factsBox.style.display === "block" ? "none" : "block";
}

function toggleSound() {
    let sound = document.getElementById("planetSound");
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}
