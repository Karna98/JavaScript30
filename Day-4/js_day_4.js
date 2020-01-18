console.log("** List of Inventors **");
const inventors = [
	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
console.table(inventors);

console.log("** List of Random People **");
const people = [
	"Beck, Glenn",
	"Becker, Carl",
	"Beckett, Samuel",
	"Beddoes, Mick",
	"Beecher, Henry",
	"Beethoven, Ludwig",
	"Begin, Menachem",
	"Belloc, Hilaire",
	"Bellow, Saul",
	"Benchley, Robert",
	"Benenson, Peter",
	"Ben-Gurion, David",
	"Benjamin, Walter",
	"Benn, Tony",
	"Bennington, Chester",
	"Benson, Leana",
	"Bent, Silas",
	"Bentsen, Lloyd",
	"Berger, Ric",
	"Bergman, Ingmar",
	"Berio, Luciano",
	"Berle, Milton",
	"Berlin, Irving",
	"Berne, Eric",
	"Bernhard, Sandra",
	"Berra, Yogi",
	"Berry, Halle",
	"Berry, Wendell",
	"Bethea, Erin",
	"Bevan, Aneurin",
	"Bevel, Ken",
	"Biden, Joseph",
	"Bierce, Ambrose",
	"Biko, Steve",
	"Billings, Josh",
	"Biondo, Frank",
	"Birrell, Augustine",
	"Black, Elk",
	"Blair, Robert",
	"Blair, Tony",
	"Blake, William"
];
console.table(people);

// Filter()
console.log(
	"** Array.prototype.filter() ** \n 1. Filter the list of inventors for those who were born in the 1500's"
);

// Method 1
var peopleBefore1500 = inventors.filter(function(inventor) {
	if (inventor.year >= 1500 && inventor.year < 1600) {
		return true;
	} else {
		return false;
	}
});

// Method 2
peopleBefore1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.table(peopleBefore1500);

// Map()
console.log(
	"** Array.prototype.map() \n 2. Give us an array of the inventors first and last names"
);

// Method 1
var fullName = inventors.map(inventor => inventor.first + " " + inventor.last);

// Method 2
fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.table(fullName);

// Sort()
console.log("** Array.prototype.sort() \n 3. Sort the inventors by birthdate, oldest to youngest");

// Method 1
var ordered = inventors.sort(function(aPerson, bPerson) {
	if (aPerson.year > bPerson.year) {
		return 1;
	} else {
		return -1;
	}
});

// Method 2
ordered = inventors.sort((aPerson, bPerson) => (aPerson.year > bPerson.year ? 1 : -1));

console.table(ordered);

// Reduce()
console.log(
	"** Array.prototype.reduce() \n 4. How many years did all the inventors live all together?"
);

// Method 1
var age = inventors.reduce((total, inventor) => {
	inventor.age = inventor.passed - inventor.year;
	return total + inventor.age;
}, 0);

console.log(age);

console.log("5. Sort the inventors by years lived");
var ageSort = inventors.sort(function(aPerson, bPerson) {
	aPersonAge = aPerson.passed - aPerson.year;
	bPersonAge = bPerson.passed - bPerson.year;

	return aPersonAge < bPersonAge ? 1 : -1;
});

console.table(inventors);

// Map()->Filter()
console.log(
	"6. create a list of Boulevards in Paris that contain 'de' anywhere in the name \n Open 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris' in new tab and open Console in Developer Mode and run following commands sequentially."
);

console.log(
	'> const category = document.querySelector(".mw-category"); \n> const links = category.querySelectorAll("a"); \n> var arrLinks = Array.from(links); \n> const deIncludes = arrLinks.map(link => link.textContent).filter(name => name.includes("de")); \n> console.table(deIncludes);'
);

// Sort()

console.log("7. Sort Exercise \n Sort the people alphabetically by last name");

const sortedBylastName = people.sort((aPerson, bPerson) => {
	const [alast, afirst] = aPerson.split(",");
	const [blast, bfirst] = bPerson.split(",");
	return alast > blast ? 1 : -1;
});

console.table(sortedBylastName);

// Reduce()
console.log("** Reduce Exercise **");
const data = [
	"car",
	"car",
	"truck",
	"truck",
	"bike",
	"walk",
	"car",
	"van",
	"bike",
	"walk",
	"car",
	"van",
	"car",
	"truck"
];
console.table(data);

console.log("8. Sum up the instances of each of these given above");

const transportation = data.reduce(function(countObj, vehicle) {
	if (!countObj[vehicle]) {
		countObj[vehicle] = 0;
	}
	countObj[vehicle]++;
	return countObj;
}, {});
console.table(transportation);
