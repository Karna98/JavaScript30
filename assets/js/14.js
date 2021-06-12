function refererenceCopying() {
    // start with strings, numbers and booleans
    console.log(
        "%c ** Numbers **",
        "font-size:20px; color:red; background:black"
    );
    let age = 100;
    let ageCopy = age;
    console.log("age : " + age, "\nageCopy : " + ageCopy);
    console.log("Updating by : age = 200");
    age = 200;
    console.log("age : " + age, "\nageCopy : " + ageCopy);

    console.log(
        "%c ** Strings **",
        "font-size:20px; color:red; background:black"
    );
    let name = "karna98";
    let nameCopy = name;
    console.log("name : " + name, "\nnameCopy : " + nameCopy);
    console.log("Updating by : name = 'Vedant'");
    name = "Vedant";
    console.log("name : " + name, "\nnameCopy : " + nameCopy);

    console.log(
        "%c ** Arrays **",
        "font-size:20px; color:red; background:black"
    );
    console.log("Let's say we have an array");
    const array = ["Wes", "Sarah", "Ryan", "Poppy"];
    console.log("-> array : " + array);

    console.log("and we want to make a copy of it by using '='");
    const arrayCopy = array;

    console.log("-> arrayCopy : " + arrayCopy);

    console.log("Updating by : arrayCopy[3] = Dave");

    // You might think we can just do something like this:
    arrayCopy[3] = "Dave";

    // however what happens when we update that array?
    console.log("-> array : " + array, "\n-> arrayCopy : " + arrayCopy);

    console.log(
        "now here is the problem! we have edited the original array too! Why? It's because that is an array reference, not an array copy. They both point to the same array! So, how do we fix this? We take a copy instead!"
    );

    console.log("Creating Copy By : ");
    // 'one way'
    console.log("1) array.slice()");
    var arrayCopyNew = array.slice();

    // or create a new array and concat the old one in
    console.log("2) [].concat(array)");
    arrayCopyNew = [].concat(array);

    // or use the new ES6 Spread
    console.log("3) [...array]");
    arrayCopyNew = [...array];

    // now when we update it, the original one isn't changed
    console.log("Updating by : arrayCopyNew[3] = NameChange");
    arrayCopyNew[3] = "NameChange";
    console.log("-> array : " + array, "\n-> arrayCopyNew : " + arrayCopyNew);

    console.log(
        "%c ** Objects **",
        "font-size:20px; color:red; background:black"
    );
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const objectPerson = {
        name: "Vedant",
        age: 22,
    };
    console.log("objectPerson :");
    console.table(objectPerson);

    // and think we make a copy:
    console.log("We create a copy by : objectPersonCopy = objectPerson");
    const objectPersonCopy = objectPerson;

    console.log("Updating by : objectPersonCopy.name = 'karna98'");
    objectPersonCopy.name = "karna98";

    console.log("objectPerson :");
    console.table(objectPerson);
    console.log("objectPersonCopy :");
    console.table(objectPersonCopy);

    // how do we take a copy instead?
    console.log(
        'How do we take a copy instead? \n So we assigned by using : objectPersonCopyNew = Object.assign({}, objectPerson, { name: "HungryGamer" })'
    );
    const objectPersonCopyNew = Object.assign({}, objectPerson, {
        name: "HungryGamer",
    });
    console.log("objectPerson :");
    console.table(objectPerson);
    console.log("objectPersonCopyNew :");
    console.table(objectPersonCopyNew);

    // We will hopefully soon see the object ...spread
    console.log(
        "Creating copy of object using spread : objectPersonCopyNew1 = { ...objectPerson }"
    );
    const objectPersonCopyNew1 = { ...objectPerson };
    console.table(objectPersonCopyNew1);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    console.log("\n Getting deeper into Array and Objects");
    const objectMan = {
        name: "Vedant",
        age: 22,
        social: {
            github: "karna98",
            LinkedIn: "vedantwakalkar",
        },
    };
    console.log("objectMan :");
    console.log(objectMan);

    console.log(
        "Creating copy of objectMan : objectManCopy = Object.assign({}, objectMan)"
    );
    const objectManCopy = Object.assign({}, objectMan);
    console.log(
        "Updating by : objectManCopy.age = 21 and objectManCopy.social.github = 'HungryGamer'"
    );
    setTimeout(function () {
        objectManCopy.age = 21;
        objectManCopy.social.facebook = "HungryGamer";
    }, 5000);

    console.log("objectMan :");
    console.log(objectMan);
    console.log("objectManCopy :");
    console.log(objectManCopy);

    console.log(
        "By using above method of creating a copy , the value still changed due to copy created is valid for level-1 of Object i.e. if we change the 'name' or 'age' in Copyobject it won't change in original one but if we change the level-2 elements i.e. 'social.github' or 'social.LinkedIn' in CopyObject, the changes will reflect in OriginalObject as well"
    );

    console.log(
        "Creating copy of objectMan : objectManCopyNew = JSON.parse(JSON.stringify(objectMan))"
    );
    const objectManCopyNew = JSON.parse(JSON.stringify(objectMan));
    console.log("objectManCopyNew :");
    console.log(objectManCopyNew);
}
window.addEventListener("DOMContentLoaded", refererenceCopying);
