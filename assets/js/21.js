function geoLocation() {
    const arrow = document.querySelector(".arrow");
    const speed = document.querySelector(".speed-value");
    const latitude = document.querySelector(".latitude");
    const longitude = document.querySelector(".longitude");

    navigator.geolocation.watchPosition(
        (data) => {
            speed.textContent =
                data.coords.speed == null
                    ? `0 KM/H`
                    : ` ${data.coords.speed} KM/H`;
            arrow.style.transform = `rotate(${data.coords.heading}deg)`;
            latitude.textContent = `Latitdue : ${data.coords.latitude}`;
            longitude.textContent = `Longitude : ${data.coords.longitude}`;
        },
        (err) => {
            console.error(err);
            alert("I can't work without accessing your location!!");
        }
    );
}
window.addEventListener("DOMContentLoaded", geoLocation);
