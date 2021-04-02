function greeting(firstName, city) {
    console.log(`I am ${firstName} from ${city}`);
}
//write a function that sorts an Array
function sortArrayNumbers(a, b) {
    if (a.year > b.year) {
        return -1;
    }
    if (b.year > a.year) {
        return 1;
    }
    return 0;
}
function sortArray(a) {
    return a.sort()
}

//syntax1
// module.exports.greeting = greeting
// module.exports.sortArray = sortArray

//syntax 2
module.exports = { greeting, sortArray, sortArrayNumbers }