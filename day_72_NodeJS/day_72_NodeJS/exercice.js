const _ = require('lodash');
const { arrayNumbers } = require('./data');
console.log(arrayNumbers);
//gib nur das ERSTE Element des Arrays zurück
console.log(_.head(arrayNumbers));
console.log(_.nth(arrayNumbers, [n = 0]));

// gib alle AUSSER dem letzten Element des Arrays zurück
console.log(_.initial(arrayNumbers));
// gib nur das LETZTE Element des Arrays zurück
console.log(_.last(arrayNumbers));

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
console.log(_.tail(arrayNumbers));

// gib das Element zurück, das an Position n steht (du brauchst einen zweiten Parameter in deiner Funktion), wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück
function nth(arr, m) {
    if (m > arr.length || m < 0) {
        return _.last(arr)
    } else {
        return _.nth(arrayNumbers, [n = m])
    }
}
console.log(_.nth(arrayNumbers, [n = 2]));
console.log(_.nth(arrayNumbers, [n = -7]));
console.log(nth(arrayNumbers, -1))

// schreibe eine Funktion, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
console.log(_.pull(arrayNumbers, 2));
// gib ein Array zurück, dass nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]
console.log(_.uniq(arrayNumbers));
// gib die Summe des Arrays zurück
console.log(_.sum(arrayNumbers))

// die Funktion bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
console.log(_.random(0, 400));
// Erstelle eine Funktion, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
console.log(_.capitalize('supercode'));
// Erstelle eine Funktion, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln
console.log(_.upperCase('supercode'));

// Erstelle eine Funktion, mit zwei Parametern. Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
// => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false  

console.log(_.endsWith('supercode', 'c'));
console.log(_.endsWith('supercode', 'e'));
