var rate = 0.7;
console.log(rate);
console.log(rate);
//error
// rate = true
//rate = "12"
rate = 0.19;
//Implicit Types
//TypeNumbers
var price = 10;
//error : not the same type
//price = "10"
//Type Strings
var product = "ipad";
// product = true
// product = 12
product = "Geforce GTX";
//Type boolean
var isAvailable = true;
// isAvailable = 0
isAvailable = false;
var valueAddedTax = function (price, rate) {
    return price * (1 + rate);
};
console.log(valueAddedTax(10, 0.19));
// console.log(valueAddedTax("10", "0.19"))
var valueAddedTax1 = function (price, rate) {
    return price * (1 + rate);
};
console.log(valueAddedTax1(10, 0.19));
//console.log(valueAddedTax1("10", "0.19"))
//Arrays
var geforce = ['GTX 1080', 'GTX 1070', 'GTX 1060'];
// geforce.push(true)
// geforce[0] = 0
geforce.push('GTX 1050');
console.log(geforce);
var discount = [0.1, 0.2, 0.3];
//discount.push('sale')
// discount[3] = true
discount.push(0.7);
var gtx1080 = [100, 'geforce', false];
gtx1080.push('isAvailable');
//I can only add string number and boolean 
// gtx1080.push({ price: 1000 })
// gtx1080 = {
//     price: 100,
//     reference: 'geforce',
//     available: false
// }
var empty = [];
empty.push(2);
empty.push(true);
empty.push('text');
empty.push([1]);
empty.push({ t: 2 });
console.log(empty);
//objects
var gtx1070 = {
    price: 100,
    reference: 'geforce',
    available: false,
    model: [1, 2, 3]
};
gtx1070.price = 200;
// gtx1070.price = '200'
//Explicit Types
//strings
// let lastName='superman'
var firstName = "superman";
// firstName = 20
firstName = "batman";
//Numbers
var age = 30;
// age = '30'
age = 26;
//boolean
var isHero = false;
isHero = true;
// isHero = '0'
//Arrays
var listsHeros = ['superman', 'batman'];
// listsHeros.push(3)
listsHeros.push('spiderman');
var listsAge = [3, 4, 5];
// listsAge.push("test")
listsAge.push(4);
//unions
var unions = 5;
unions = '5';
// unions = true
var mixed = true;
mixed = 1;
mixed = '1';
var mixedArrays = [true, '1', 4];
mixedArrays.push(false);
//objects
var hero1 = {
    name: 'superman',
    age: 20
};
// hero1.isHero = true
// hero1 = 'superman'
var hero2 = {
    name: 'superman',
    age: 20,
    isHero: false
};
console.log(hero2);
//any
var hero3 = { name: 'superman', age: 30 };
hero3 = 30;
hero3 = true;
hero3 = "spiderman";
//function
var greeting = function () {
    console.log('hello world');
};
//greeting = true
var greeting1 = function () {
    console.log('hello world');
};
greeting1();
var addNumbers = function (a, b) {
    console.log(a + b);
};
addNumbers(4, 4);
addNumbers(4, 2);
//optional parameter
var addNumbers1 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
addNumbers1(4, 4);
addNumbers1(4, 4, 1000);
var addNumbers2 = function (a, b) {
    return a + b;
};
var result = addNumbers2(2, 5);
//result = true
var result1 = addNumbers2(2, 5);
result1 = true;
//void
var addNumbers3 = function (a, b) {
    console.log(a + b);
};
//Typescript + Dom
var anchor = document.querySelector('.google');
// console.log(anchor.href)
if (anchor) {
    console.log(anchor.href);
}
var a = document.querySelector('a');
console.log(a.href);
var form = document.querySelector('form');
console.log(form.children);
var isDone = document.querySelector('#isDone');
//console.log(isDone.value)
var todo = document.querySelector('#todo');
var priority = document.querySelector('#priority');
var submit = document.querySelector('.submit');
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
var RessourcePriority;
(function (RessourcePriority) {
    RessourcePriority[RessourcePriority["Low priority"] = 0] = "Low priority";
    RessourcePriority[RessourcePriority["Moderate"] = 1] = "Moderate";
    RessourcePriority[RessourcePriority["Serious"] = 2] = "Serious";
    RessourcePriority[RessourcePriority["Critical"] = 3] = "Critical";
})(RessourcePriority || (RessourcePriority = {}));
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
var Todo = /** @class */ (function () {
    function Todo(isDone, todo, priority) {
        this.isDone = isDone;
        this.todo = todo;
        this.priority = priority;
    }
    Todo.prototype.description = function () {
        return this.todo + " is " + (this.isDone ? "finished" : "not finished") + " and have " + this.checkPriority() + " a priority ";
    };
    Todo.prototype.checkPriority = function () {
        switch (this.priority) {
            case 0:
                return 'low';
            case 1:
                return 'moderate';
            case 2:
                return 'serious';
            case 3:
                return 'critical';
        }
    };
    return Todo;
}());
var task1 = new Todo(true, 'task1', 2);
console.log(task1);
task1.description();
var task2 = new Todo(false, 'task2', 0);
console.log(task2);
task2.description();
var todos = [];
todos.push(task1);
todos.push(task2);
//todos.push({ status: 'Hahahha' })
console.log(todos);
var task3 = new Todo(false, 'task3', 1);
todos.push(task3);
//Access modifiers
//public - private - readonly
// console.log(task3.todo)
//private
// task3.todo = "test"
// console.log(task3.todo)
//readonly
console.log(task3.priority);
var listTodos = [];
var list = document.querySelector('ul');
console.log('%c -------------TODO CONSOLE------------', 'color:tomato');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(isDone.value)
    // console.log(todo.value)
    // console.log(priority.value)
    // console.log(priority.valueAsNumber)
    // let task = new Todo(isDone.value == 'finished' ? true : false, todo.value, priority.valueAsNumber)
    var task = new Todo(isDone.value == 'finished' ? true : false, todo.value, RessourcePriority[priority.value]);
    // console.log(task)
    listTodos.push(task);
    console.log(listTodos);
    list.innerHTML = "";
    listTodos.forEach(function (elt) {
        console.log(elt.description());
        list.innerHTML += "<li>" + elt.description() + "</li>";
    });
});
//Enums
//
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c1 = Color.red;
console.log(c1); //0
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 1] = "green";
    Color1[Color1["blue"] = 99] = "blue";
})(Color1 || (Color1 = {}));
var c2 = Color1.blue;
console.log(c2); //99
var Color2;
(function (Color2) {
    Color2["r"] = "red";
    Color2["g"] = "green";
    Color2["b"] = "blue";
})(Color2 || (Color2 = {}));
var c3 = Color2.g;
console.log(c3); //green
// enum RessourcePriority {
//     'Low priority',
//     'Moderate',
//     'Serious',
//     'Critical'
// }
var EnumTodo = /** @class */ (function () {
    function EnumTodo(isDone, todo, priority) {
        this.isDone = isDone;
        this.todo = todo;
        this.priority = priority;
    }
    EnumTodo.prototype.description = function () {
        return this.todo + " is " + (this.isDone ? "finished" : "not finished") + " and have a priority " + this.priority;
    };
    return EnumTodo;
}());
var enumTodo1 = new EnumTodo(true, 'task', RessourcePriority.Critical);
console.log(enumTodo1);
var enumTodo2 = new EnumTodo(true, 'task', RessourcePriority["Low priority"]);
console.log(enumTodo2);
//Tulpes
var student = [1, 'Superman'];
var superman = {
    heroName: 'superman',
    age: 30,
    isCool: true
};
var car1 = {
    carName: 'BMW',
    carPrice: 100,
    carModel: 200
};
var car2 = {
    carName: 'Audi',
    carPrice: 1000,
    carModel: 2000
};
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
