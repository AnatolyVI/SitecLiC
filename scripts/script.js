"use strict"
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('LamentBGM').play();
    document.removeEventListener('click', musicPlay);
}