function sortWithoutArticles() {
    function originalData() {
        return [
            "The Plot in You",
            "The Devil Wears Prada",
            "Pierce the Veil",
            "Norma Jean",
            "The Bled",
            "Say Anything",
            "The Midway State",
            "We Came as Romans",
            "Counterparts",
            "Oh, Sleeper",
            "A Skylit Drive",
            "Anywhere But Here",
            "An Old Dog",
        ];
    }

    const button = document.getElementsByClassName("button");
    var sortStatus = 0;

    function strip(brandName) {
        return brandName.replace(/^(a |the |an)/i, "").trim();
    }

    function sortIt() {
        const bands = originalData();
        if (sortStatus == 0) {
            document.querySelector("#bands").innerHTML = bands
                .map((band) => `<li>${band}</li>`)
                .join("");
            button[0].innerHTML = "Sort It";
            sortStatus = 1;
        } else {
            const sortedBands = bands.sort((a, b) =>
                strip(a) > strip(b) ? 1 : -1
            );
            document.querySelector("#bands").innerHTML = sortedBands
                .map((band) => `<li>${band}</li>`)
                .join("");
            button[0].innerHTML = "Unsort It";
            sortStatus = 0;
        }
    }

    sortIt();
    button[0].addEventListener("click", sortIt);
}
window.addEventListener("DOMContentLoaded", sortWithoutArticles);
