function consoleTricks() {
    const dogs = [
        { name: "Snickers", age: 2 },
        { name: "hugo", age: 8 },
    ];

    // clearing
    console.clear();
    console.log("** Clearing **\n After using console.clear()");

    // Regular
    console.log("** Regular **");
    console.log("This is Regular Log");

    // Interpolated
    console.log("** Interpolated **");
    console.log("This is Interpolated : '%s' string", "Interpolated");
    console.log("For ES6 use Back-ticks '`${var}`'");

    // Styled
    console.log("** Styled **");
    console.log(
        "%c It is logged.",
        "font-size:50px; color:red; background:black"
    );

    // warning!
    console.log("** Warning **");
    console.warn("This is console.warn()");

    // Error :|
    console.log("** Error **");
    console.error("This is console.error()");

    // Info
    console.log("** Info **");
    console.info("This is console.info()");

    // Testing
    console.log("** Testing **");
    console.assert(1 === 2, "This is console.assert(1 === 2, 'msg')");

    // Viewing DOM Elements
    console.log("** Viewing DOM Elements **");
    const para = document.querySelector("p");
    console.log("This is console.log(document.querySelector(element)) : ");
    console.log(para);
    console.log("This is console.dir(element) : ");
    console.dir(para);

    // Grouping together
    console.log("** Dogs **");
    console.table(dogs);
    console.log("** Grouping **");
    dogs.forEach((dog) => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}.`);
        console.log(`He/She is ${dog.age} old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.log("** console.count() **");
    console.count("Count");
    console.count("Count");
    console.count("No-Count");
    console.count("Count");
    console.count("Count");
    console.count("Count");
    console.count("No-Count");

    // timing
    console.log("** Timing **");
    console.time("Data Fetching");
    fetch("https://api.github.com/users/karna98")
        .then((data) => data.json())
        .then((data) => {
            console.timeEnd("Data Fetching");
            console.log(data);
        });
}
window.addEventListener("DOMContentLoaded", consoleTricks);
