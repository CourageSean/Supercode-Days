console.log("hello")

let victorHugo = {
    firstName: "Victor",
    lastName: "Hugo",
    yearOfBirth: 1802,
    books: ["le dernier jour d'un condamné", "Le Rhin"],
    description() {
        console.log(`I am ${this.firstName} ${this.lastName}, I am born ${this.yearOfBirth} and I did write:`)
        this.books.forEach(elt => console.log(`- ${elt}`))
    }
}

let georgeRRMartin = {
    firstName: "George",
    lastName: "Martin",
    yearOfBirth: 1948,
    books: ["The Hedge Knight", "Nightflyers", "The Sworn Sword"],
    description() {
        console.log(`I am ${this.firstName} ${this.lastName}, I am born ${this.yearOfBirth} and I did write:`)
        this.books.forEach(elt => console.log(`- ${elt}`))
    }
}

victorHugo.description()
georgeRRMartin.description()


//1-Object constructor
// function

function Author(firstName, lastName, yearOfBirth, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = books;
    this.description = function () {
        console.log(`I am ${this.firstName} ${this.lastName}, I am born ${this.yearOfBirth} and I did write:`)
        this.books.forEach(elt => console.log(`- ${elt}`))
    }
}

let michelleObama = new Author('Michelle', 'Obama', 1964, ['Becoming', 'American Grown'])

console.log(michelleObama)

michelleObama.description()

function Product(productName, productPrice, productYear, productMaterials) {
    this.productName = productName
    this.productPrice = productPrice
    this.productYear = productYear
    this.productMaterials = productMaterials
    this.productDescription = function () {
        console.log(this.productName, this.productYear, this.productPrice)
        this.productMaterials.forEach(elt => console.log(elt))
    }
}

let product1 = new Product('iphone', 1000, 2020, ['plastic', 'glass'])
console.log(product1)
product1.productDescription()


//2-Object constructor
// class =>template for object
class ProductClass {
    constructor(productName, productPrice, productYear, productMaterials) {
        this.productName = productName
        this.productPrice = productPrice
        this.productYear = productYear
        this.productMaterials = productMaterials
    }
    productDescription() {
        console.log(this.productName, this.productYear, this.productPrice)
        this.productMaterials.forEach(elt => console.log(elt))
    }
}

console.log(typeof ProductClass)
let product2 = new ProductClass('Samsung', 800, 2019, ['glass', 'plastic'])
console.log(product2)
product2.productDescription()


//Surface
//width, height
// calculte => console.log(width*height)

class Surface {
    constructor(height, width) {
        this.width = width
        this.height = height
    }
    calculteSurface() {
        return this.height * this.width
    }
}

let surface1 = new Surface(10, 10)
console.log(surface1)
console.log(surface1.calculteSurface())

//extend class in a class
class CubicSurface extends Surface {
    constructor(width, height, depth) {
        super(height, width)
        this.height = height
        this.width = width
        this.depth = depth
    }
    calculteCubicSurface() {
        console.log(this.width * this.height * this.depth)
    }
}

let cubicSurface = new CubicSurface(10, 10, 10)
cubicSurface.calculteCubicSurface()
console.log(cubicSurface.calculteSurface())


class House extends Surface {
    constructor(price, height, width) {
        super(height, width)
        this.price = price
    }
    description() {
        console.log(`the house cost ${this.price}$ and it's ${this.calculteSurface()} m2`)
    }
}

let house = new House(1000, 1, 1)
house.description()


//setter getter ...
//prototype ....

function User(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

}

let user1 = new User('super', 'man')
console.log(user1)
user1.isCool = true
console.log(user1)
let user2 = new User('wonder', 'woman')
console.log(user2)

User.prototype.isCool = true
console.log(user2.isCool)

console.log(User)

let user3 = new User('bat', 'man')
console.log(user3)
console.log(user3.isCool)
