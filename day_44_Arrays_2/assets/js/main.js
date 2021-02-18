console.log('Morning')
//concat
let arr1 = [1, 3, 4]
let arr2 = [5, 7, 6]
let arr3 = arr1.concat(arr2)
console.log(arr3)

//reverse 
arr1.reverse()
console.log(arr1)

//split_String method => array 
let str = "hello;world;I;am;Super Cool"
str = str.split(';')
console.log(str)

//join array=>string 
let hello = ['guten', ' ', 'morgen']
console.log(hello.join(''))

//map
//array => array 
let arr4 = [5, 7, 8]
let arr5 = arr4.map(superman => {
    return superman * 2
})
console.log(arr5)
let arr6 = arr4.map(elt => elt * 3)
console.log(arr6)

// input:
//['nrw','hamburg','berlin']
//output:
//1: ['NRW','HAMBURG','BERLIN']
//2: ['Nrw','Hamburg','Berlin']
let region = ['nrw', 'hamburg', 'berlin']
let regionUpperCase = region.map(elt => elt.toUpperCase())
console.log(regionUpperCase)
// let test = "test"
// console.log(test.charAt(0).toUpperCase() + test.slice(1))
let regionCapitalized = region.map(elt => elt.charAt(0).toUpperCase() + elt.slice(1))
console.log(regionCapitalized)

//filter
let arr7 = [3, 5, 7, 2, 56, 88, 67, 991]

let arr8 = arr7.filter(elt => elt > 10)
console.log(arr8)
console.log(arr7.filter(elt => elt % 2 == 0))
// console.log(arr8Even)
// console.log(arr7)

//forEach: loops method _ arrays
let fruits = ['orange', 'banana', 'apple']
const content = document.getElementById("content")
const content1 = document.getElementById("content1")
fruits.forEach(elt => content.innerHTML += `<h1>${elt}</h1>`)
let imgURL = ['https://images.unsplash.com/photo-1583314530369-2f06b52782e7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cVBZc0R6dkpPWWN8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1613338971583-57949e3523ed?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1613331283720-52468002090a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']
imgURL.forEach(elt => content1.innerHTML += `<img src=${elt} alt="">`)

//sort
fruits.sort()
console.log(fruits)
let arr10 = [0, 8, 5, 2, 22]
console.log('22' < '5')
console.log(arr10.sort((a, b) => a - b))