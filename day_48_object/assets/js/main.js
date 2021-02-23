// console.log('morning')
// let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave?`

// // console.log(Math.ceil(text.length / (100)))
// // console.log(text.slice(0, 100))
// // text = text.slice(100)
// // console.log(text)
// // console.log(' - 27 of 27'.length)
// function cut(text) {
//     let totalElement = Math.ceil(text.length / 100)
//     let counter = 1
//     let newArr = []
//     while (text.length > 0) {
//         if (text.length > 100) {
//             let sliceIndex = text.slice(0, 100).lastIndexOf(' ')
//             console.log(sliceIndex)
//             newArr.push(`${text.slice(0, sliceIndex)} - ${counter} of ${totalElement}`)
//             text = text.slice(sliceIndex)
//         } else {
//             newArr.push(`${text.slice(0, 100)} - ${counter} of ${totalElement}`)
//             text = text.slice(100)
//         }
//         counter++;
//     }
//     return newArr
// }

// console.log(cut(text))

// function sumSomething(input, s1, s2) {
//     let sum = 0
//     for (let i = 1; i < input; i++) {
//         if (i % s1 == 0 || i % s2 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(sumSomething(10, 3, 5))
// console.log(sumSomething(10, 4, 7))

//Objects
// key:value
let person = {
    firstName: 'superman',
    lastName: 'kent',
    city: 'NYC',
    age: 30,
    isHero: true,
    hobbies: ['flying', 'football'],
    'is happy': true
}
//key => single word
//Accessing Object
console.log(person)

//display value object
console.log(person.firstName)
console.log(person.hobbies[1])

//reassign value object
console.log(person.isHero)
person.isHero = false
console.log(person.isHero)
console.log(person)

//add new key and value
person.isCool = true
console.log(person)

// key => multiple word
console.log(person['is happy'])

//delete key and value from object
delete person['is happy']
console.log(person)
delete person.city
console.log(person)

//properties and methods
console.log(Math)
let user = {
    userName: 'spiderman',
    email: 'spiderman@super.de',
    films: ['spiderman1', 'spiderman2'],
    logIn: () => {
        console.log('%c arrow method', 'color:tomato')
        console.log(this)
        console.log('spiderman is logged in')
    },
    logOut: function () {
        console.log('%c function method', 'color:tomato')
        console.log(this.userName)
        console.log(this.userName + 'is logged out')
    },
    subscribe() {
        console.log('%c function method', 'color:tomato')
        console.log(this)
        console.log(this.email + ' subscribed to the channel')
    }
}

user.logIn()
user.logOut()
user.subscribe()

//this
//outside an object: window object
// console.log(this)
//inside an object: refers to the object
//⚠️🚨 this on arrow method refers to the window object

let arr = [0, 2, 3]
let arr1 = arr
arr.pop()
console.log(arr)
console.log(arr1)

//object product
//productName
//productPrice
//productYear
//productDescription () : the productName cost productPrice $$$ and was produced productYear

let product = {
    productName: 'macbook',
    productPrice: '2000',
    productYear: 2021,
    productDescription() {
        console.log(`the ${this.productName} cost ${this.productPrice} $$$ and was produced ${this.productYear}`)
    }
}
product.productDescription()


//Loops Object
//for in
let newCar = {
    model: 'Audi',
    year: 2020,
    color: 'gold'
}

for (let key in newCar) {
    console.log(key)
    console.log(newCar[key])
    console.log(key, newCar[key])
}

let grade = {
    math: 10,
    sport: 4,
    english: 8,
    js: 11,
    css: 2
}
//sum of all grades
let sum = 0
for (let i in grade) {
    sum += grade[i]
}
console.log(sum)


// Array of all keys from an object
let keysArr = Object.keys(grade)
console.log(keysArr)

// Array of all values from an object
let valuesArr = Object.values(grade)
console.log(valuesArr)

// Array of every key and value in an array
let entriesArr = Object.entries(grade)
console.log(entriesArr)

let europäischeUnion = {
    Belgien: "(BE)",
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",
    Luxemburg: "(LU)",
    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Niederlände: "(NL)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)"
}


let europäischeUnionName = Object.keys(europäischeUnion)
console.log(europäischeUnionName);

let author = {
    firstName: 'victor',
    lastName: 'hugo',
    book1: {
        nameBook: 'Les misérables',
        like: 2000,
        price: {
            '$': 19.99,
            euro: 15
        }
    }
}
console.log(author.book1.price['$'])
console.log(author.book1.price.euro)
console.log(author.book1.price['euro'])
