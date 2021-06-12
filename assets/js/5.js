function makeItMove() {
    const panels = document.querySelectorAll(".panel");

    function toggleOff(panels) {
        panels.forEach((panel) => {
            if (panel.classList.length === 4) {
                panel.classList.remove("open");
            }
            if (panel.classList.value.length === 3) {
                panel.classList.remove("open-active");
            }
        });
    }

    panels.forEach((panel) =>
        panel.addEventListener("click", function () {
            if (panel.classList.length === 2) {
                panel.classList.add("open");
            } else {
                panel.classList.remove("open");
            }
            toggleOff(panels);
        })
    );

    panels.forEach((panel) =>
        panel.addEventListener("transitionend", function (e) {
            if (e.propertyName.includes("flex")) {
                panel.classList.toggle("open-active");
            }
        })
    );
}

window.addEventListener("DOMContentLoaded", makeItMove);
