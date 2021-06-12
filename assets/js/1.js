function playSound(e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const button = document.querySelector(`.button[data-key = '${e.keyCode}']`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    button.classList.add("playing");

    setTimeout(function () {
        button.classList.remove("playing");
    }, audio.duration * 1000);
}

window.addEventListener("keydown", playSound);
