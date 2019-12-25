const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 }, //76
    { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 }, //84
    { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 }, //78
    { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 }, //67
    { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 }, //59
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 }, //70
    { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },// 89
    { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },//81
    { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },// 37
    { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 }, //50
    { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },//90
    { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }//80
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who were born in the 1500's
let filter = inventors.filter(inventor => {
    isBornInFifteenHundreds = inventor.born >= 1500 && inventor.born < 1600;
    return isBornInFifteenHundreds;
});
// console.table(filter);


// 2. Give an array of the inventors' first and last names
let fullNames = inventors.map(inventor => {
    return `${inventor.first} ${inventor.last}`;
});
//console.log("Inventors full names: " + fullNames.join(", "));

// 3. Sort the inventors by birthdate, oldest to youngest
let sortedInventors = inventors.sort((a, b) => { return a.born > b.born ? 0 : -1 });
//console.table(sortedInventors);

// 4. How many years did all the inventors live?
let total = inventors.reduce((total, num) => {
    return total + (num.passed - num.born);
}, 0);
// console.table(total);

// 5. Sort the inventors by years lived
let yearsLived = inventors.sort((a, b) => {
    let first = (a.passed - a.born);
    let last = (b.passed - b.born);

    return first > last ? -1 : 1;
});
//console.table(yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let links = [...document.querySelectorAll(".mw-category a")];
let mapped = links.map(link => link.textContent);
let filtered = mapped.filter(word => word.includes("de"));

// 7. Sort the people alphabetically by last name
let orderByLastName = inventors.sort((a, b) => {
    return a.last > b.last ? 0 : -1;
});
// console.table(orderByLastName);

// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let repeatedDataSums = data.reduce((array, key) => {
    if (!array[key]) array[key] = 0
    array[key]++;
    return array;
}, {});
// console.log(repeatedDataSums);

// ## Array Cardio Day 2
const otherPeople = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'God is great!', id: 1 }
];

// Some and Every Checks

// is at least one person 19 or older?
const isNineteenOrOlder = (person) => person.year >= 2000;
// console.log(otherPeople.some(isNineteenOrOlder));
// is everyone 19 or older?
// console.log(otherPeople.every(isNineteenOrOlder));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

let specialUser = comments.find( number => {
    return number.id == 1
});
// console.log(specialUser);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let removedUser = comments.findIndex( number => {
    return number.id == 823423
 });

const newComments = [
    ...comments.slice(0, removedUser), //spread so it won't be an array of arrays that gets returned
    ...comments.slice(removedUser + 1), // move to index after removedItem and spread the rest of the array in there
];

console.table(newComments);