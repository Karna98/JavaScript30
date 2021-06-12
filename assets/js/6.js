function letSearchIt() {
    // URL : "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/a-detailed-version.json";
    const indianCitiesEndpoint = "../assets/json/Indian_Cities.json";

    // URL : "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    const usaCitiesEndpoint = "../assets/json/USA_Cities.json";

    const indianCities = [];
    const usaCities = [];

    fetch(indianCitiesEndpoint)
        .then((data) => data.json())
        .then((data) => Object.entries(data).map((data) => data[1]))
        .then((data) => indianCities.push(...data));

    fetch(usaCitiesEndpoint)
        .then((blob) => blob.json())
        .then((data) => usaCities.push(...data));

    function findMatches(wordToMatch, cities) {
        const regex = new RegExp(wordToMatch, "gi");
        return cities.filter((place) => place.city.match(regex));
    }

    function displayMatches() {
        const matchedArr = findMatches(this.value, indianCities);
        const html = matchedArr
            .map((place) => {
                if (this.value === "") return;

                const regex = new RegExp(this.value, "gi");

                const cityName = place.city.replace(
                    regex,
                    `<b>${this.value}</b>`
                );

                return `
                <li>
                    <span class = "name">
                        ${cityName}
                    </span>
                    <span title="Latitude" class = "latitude">
                        ${place.latitude} (<i>Lat.</i>)
                    </span>
                    <span title="Longitude" class = "longitude">
                        ${place.longitude} (<i>Long.</i>)
                    </span>
                </li>
                `;
            })
            .join("");

        suggesstions.innerHTML = html;
    }

    const searchInput = document.querySelector(".search");
    const suggesstions = document.querySelector(".suggestions");

    searchInput.addEventListener("change", displayMatches);
    searchInput.addEventListener("keyup", displayMatches);
}

window.addEventListener("DOMContentLoaded", letSearchIt);
