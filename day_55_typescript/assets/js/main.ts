let rate = 0.7
console.log(rate)
console.log(rate)
//error
// rate = true
//rate = "12"
rate = 0.19
//Implicit Types
//TypeNumbers
let price = 10
//error : not the same type
//price = "10"

//Type Strings
let product = "ipad"
// product = true
// product = 12
product = "Geforce GTX"

//Type boolean
let isAvailable = true
// isAvailable = 0
isAvailable = false

const valueAddedTax = (price: number, rate: number) => {
    return price * (1 + rate)
}

console.log(valueAddedTax(10, 0.19))
// console.log(valueAddedTax("10", "0.19"))

const valueAddedTax1 = (price: number, rate: number) => {
    return price * (1 + rate)
}

console.log(valueAddedTax1(10, 0.19))
//console.log(valueAddedTax1("10", "0.19"))

//Arrays
let geforce = ['GTX 1080', 'GTX 1070', 'GTX 1060']
// geforce.push(true)
// geforce[0] = 0
geforce.push('GTX 1050')
console.log(geforce);

let discount = [0.1, 0.2, 0.3]
//discount.push('sale')
// discount[3] = true
discount.push(0.7)

let gtx1080 = [100, 'geforce', false]
gtx1080.push('isAvailable')
//I can only add string number and boolean 
// gtx1080.push({ price: 1000 })

// gtx1080 = {
//     price: 100,
//     reference: 'geforce',
//     available: false
// }
let empty = []
empty.push(2)
empty.push(true)
empty.push('text')
empty.push([1])
empty.push({ t: 2 })
console.log(empty);


//objects
let gtx1070 = {
    price: 100,
    reference: 'geforce',
    available: false,
    model: [1, 2, 3]
}

gtx1070.price = 200
// gtx1070.price = '200'

//Explicit Types
//strings
// let lastName='superman'
let firstName: string = "superman"
// firstName = 20
firstName = "batman"

//Numbers
let age: number = 30
// age = '30'
age = 26

//boolean
let isHero: boolean = false
isHero = true
// isHero = '0'

//Arrays
let listsHeros: string[] = ['superman', 'batman']
// listsHeros.push(3)
listsHeros.push('spiderman')

let listsAge: number[] = [3, 4, 5]
// listsAge.push("test")
listsAge.push(4)

//unions
let unions: string | number = 5
unions = '5'
// unions = true

let mixed: string | number | boolean = true
mixed = 1
mixed = '1'

let mixedArrays: (string | number | boolean)[] = [true, '1', 4]
mixedArrays.push(false)

//objects
let hero1: object = {
    name: 'superman',
    age: 20
}

// hero1.isHero = true
// hero1 = 'superman'

let hero2: {
    name: string,
    age: number,
    isHero: boolean
} = {
    name: 'superman',
    age: 20,
    isHero: false
}
console.log(hero2)

//any
let hero3: any = { name: 'superman', age: 30 }
hero3 = 30
hero3 = true
hero3 = "spiderman"


//function
let greeting = () => {
    console.log('hello world');
}
//greeting = true

let greeting1: Function = () => {
    console.log('hello world');
}
greeting1()

const addNumbers = (a: number, b: number) => {
    console.log(a + b);
}
addNumbers(4, 4)
addNumbers(4, 2)
//optional parameter
const addNumbers1 = (a: number, b: number, c?: number) => {
    console.log(a + b);
    console.log(c)
}
addNumbers1(4, 4)
addNumbers1(4, 4, 1000)

const addNumbers2 = (a: number, b: number) => {
    return a + b;
}
let result = addNumbers2(2, 5)
//result = true
let result1: any = addNumbers2(2, 5)
result1 = true

//void
const addNumbers3 = (a: number, b: number) => {
    console.log(a + b);
}

//Typescript + Dom

let anchor = document.querySelector('.google') as HTMLAnchorElement
// console.log(anchor.href)
if (anchor) {
    console.log(anchor.href)
}

const a = document.querySelector('a')!
console.log(a.href)

const form = document.querySelector('form') as HTMLFormElement
console.log(form.children)

const isDone = document.querySelector('#isDone') as HTMLSelectElement
//console.log(isDone.value)

const todo = document.querySelector('#todo') as HTMLInputElement
const priority = document.querySelector('#priority') as HTMLSelectElement
const submit = document.querySelector('.submit') as HTMLInputElement




//classes

// class Todo {
//     public isDone: boolean;
//     private todo: string;
//     readonly priority: number
//     constructor(isDone1: boolean, todo1: string, priority1: number) {
//         this.isDone = isDone1
//         this.todo = todo1
//         this.priority = priority1
//     }
//     description() {
//         console.log(`${this.todo} is ${this.isDone ? "finished" : "not finished"} and have a priority ${this.priority}`)
//     }
// }
enum RessourcePriority {
    'Low priority',
    'Moderate',
    'Serious',
    'Critical'
}

// class Todo {

//     constructor(
//         public isDone: boolean,
//         private todo: string,
//         readonly priority: number
//     ) { }
//     description() {
//         return `${this.todo} is ${this.isDone ? "finished" : "not finished"} and have a priority ${this.priority}`
//     }
// }
class Todo {

    constructor(
        public isDone: boolean,
        private todo: string,
        readonly priority: RessourcePriority
    ) { }
    description() {
        return `${this.todo} is ${this.isDone ? "finished" : "not finished"} and have ${this.checkPriority()} a priority `
    }
    checkPriority() {
        switch (this.priority) {
            case 0:
                return 'low'
            case 1:
                return 'moderate'
            case 2:
                return 'serious'
            case 3:
                return 'critical'
        }
    }
}

let task1 = new Todo(true, 'task1', 2)
console.log(task1)
task1.description()

let task2 = new Todo(false, 'task2', 0)
console.log(task2)
task2.description()

let todos: Todo[] = []
todos.push(task1)
todos.push(task2)
//todos.push({ status: 'Hahahha' })
console.log(todos)
let task3 = new Todo(false, 'task3', 1)
todos.push(task3)

//Access modifiers
//public - private - readonly

// console.log(task3.todo)

//private
// task3.todo = "test"
// console.log(task3.todo)
//readonly
console.log(task3.priority)

let listTodos: Todo[] = []
const list = document.querySelector('ul') as HTMLElement
console.log('%c -------------TODO CONSOLE------------', 'color:tomato')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(isDone.value)
    // console.log(todo.value)
    // console.log(priority.value)
    // console.log(priority.valueAsNumber)
    // let task = new Todo(isDone.value == 'finished' ? true : false, todo.value, priority.valueAsNumber)
    let task = new Todo(isDone.value == 'finished' ? true : false, todo.value, RessourcePriority[priority.value])
    // console.log(task)
    listTodos.push(task)
    console.log(listTodos)
    list.innerHTML = ""
    listTodos.forEach(elt => {
        console.log(elt.description())
        list.innerHTML += `<li>${elt.description()}</li>`
    })
})



//Enums
//
enum Color { red, green, blue }
let c1: Color = Color.red
console.log(c1) //0

enum Color1 { red, green, blue = 99 }
let c2: Color1 = Color1.blue
console.log(c2) //99

enum Color2 { r = 'red', g = 'green', b = 'blue' }
let c3: Color2 = Color2.g
console.log(c3) //green

// enum RessourcePriority {
//     'Low priority',
//     'Moderate',
//     'Serious',
//     'Critical'
// }

class EnumTodo {
    constructor(
        public isDone: boolean,
        private todo: string,
        readonly priority: RessourcePriority
    ) { }
    description() {
        return `${this.todo} is ${this.isDone ? "finished" : "not finished"} and have a priority ${this.priority}`
    }
}
let enumTodo1 = new EnumTodo(true, 'task', RessourcePriority.Critical)
console.log(enumTodo1)

let enumTodo2 = new EnumTodo(true, 'task', RessourcePriority["Low priority"])
console.log(enumTodo2)

//Tulpes

let student: [number, string] = [1, 'Superman']
// student = ['batman', 45]

//Interfaces

interface isHero {
    heroName: string,
    age: number,
    isCool: boolean
}

let superman: isHero = {
    heroName: 'superman',
    age: 30,
    isCool: true
}

interface car {
    carName: string,
    carPrice: number,
    carModel: number
}

let car1: car = {
    carName: 'BMW',
    carPrice: 100,
    carModel: 200
}
let car2: {
    carName: string,
    carPrice: number,
    carModel: number
} = {
    carName: 'Audi',
    carPrice: 1000,
    carModel: 2000
}



//Generics
// operators 
//??
//?
//!
// ||=
// &&=

//aliases
//Interfaces with classes
//modules
//workflow => public + src 
//ts config