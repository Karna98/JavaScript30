function konamiCode() {
    console.log(
        "%c What's my Username?",
        "font-size:50px; color:gold; background:black"
    );
    console.log(
        "%c Close the consle",
        "font-size:50px; color:black; background:gold"
    );
    console.log(
        "%c Type it on webpage",
        "font-size:50px; color:gold; background:black"
    );
    const secretPass = "karna98";
    const pressedArray = [];
    document.addEventListener("keyup", (e) => {
        pressedArray.push(e.key);
        console.log(pressedArray);
        pressedArray.splice(
            -secretPass.length - 1,
            pressedArray.length - secretPass.length
        );
        console.log(pressedArray);
        if (pressedArray.join("").includes(secretPass)) {
            try {
                cornify_add();
            } catch (error) {}
            pressedArray.length = 0;
        }
    });
}
window.addEventListener("DOMContentLoaded", konamiCode);
