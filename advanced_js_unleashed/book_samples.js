"use strict";
function process() {
	var fnInsideBlockVar;
	if (true) {
		let fnInsideBlock = function fnInsideBlock() {
			console.log("I am inside a block");
		};
		console.log("processing...");
		fnInsideBlockVar = fnInsideBlock;
	}
	fnInsideBlockVar();
}

process();
//~///////~///

// let Car = "Honda";

// if (true) {
// 	console.log(typeof Car); // error

// 	class Car {}
// }
//~///////~///

var count = 5;

{
	console.log(count); // hoisted but cannot access due to TDZ
	// let count = 10;
}
//~///////~///

console.log(typeof Car); // undefined
console.log(typeof Person); // undefined
var Car = class {
	constructor(model) {
		this.model = model;
	}
};
var Person = function (name) {
	this.name = name;
};
//~///////~///

var todoList = ["grocery", "exercise", "meeting"];

function emptyTodoList() {
	todoList = [];
}

console.log(window.hasOwnProperty("todoList")); // true
console.log(window.hasOwnProperty("emptyTodoList"));
//~///////~///

// const todoList = ["grocery", "exercise", "meeting"];

// let emptyTodoList = function () {
// 	todoList = [];
// };

// console.log(window.hasOwnProperty("todoList")); // false
// console.log(window.hasOwnProperty("emptyTodoList")); // false
//~///////~///

// var result;
// function printSquare(num) {
// 	result = num * num;
// 	console.log(result); // 64
// }
// printSquare(8);
// console.log("implicit global: " + result);
//~///////~///

console.log(document.getElementById("mainHeading"));
console.log(window.hasOwnProperty("mainHeading")); //false // proto //
console.log(window.mainHeading);
//~///////~///

let hobby = "reading";
function printHobbies() {
	const hobby = "traveling";
	console.log(hobby); // traveling
}
printHobbies();
//~///////~///

var prefix = ">";
function log(logLevel, msg) {
	let prefix = ":::";
	console.log(`${prefix} ${logLevel} : ${msg}`);
}
log("debug", "error caught"); // ::: debug : error caught
console.log(window.prefix); // >

//~///////~///
let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

//~///////~///
// function sum(...theArgs) {
// 	let total = 0;
// 	for (const arg of theArgs) {
// 		total += arg;
// 	}
// 	return total;
// }

// console.log(sum(1, 2, 3));

//~///////~///
function paramScope(arr = ["initial array"], buff = () => arr) {
	// var arr = [1, 2, 3];
	arr = [1, 2, 3];
	console.log(arr); // [1, 2, 3]
	console.log(buff()); // ["initial array"]
}

paramScope();

//~///////~///
let fn = function namedFn() {
	let namedFn = 123;
	console.log(namedFn);
};

fn();

//~///////~///
const myName = "John doe";
function hello() {
	const greeting = "hello " + myName;
	function greet() {
		console.log(greeting);
	}
	greet();
}

hello();

//~///////~///
const value1 = "5";
const value2 = 9;
// let sum = value1 + value2;
// let sum = value2+value1;
let sum = Number(value1) + value2;

console.log(sum);

//~///////~///
const result = "50" - 20;
console.log(result);

// C O E R C I O N

//~///////~///
// const obj = { a: 123 };
// console.log(obj);
// obj.toString();
// console.log(obj);

//~///////~///
// const obj = {
// 	toString() {
// 		console.log("toString invoked");
// 		return "hello world";
// 	},
// 	// toString() {
// 	// 	console.log("toString invoked");
// 	// 	return true;
// 	// },
// 	valueOf() {
// 		console.log("valueOf invoked");
// 		return 123;
// 	},
// };
// console.log(`${obj}`);

//~///////~///
const obj = {
	toString() {
		console.log("toString invoked");
		return [];
	},
	valueOf() {
		console.log("valueOf invoked");
		return 123;
	},
};

console.log(`${obj}`);
// toString invoked
// valueOf invoked
// 123

//~///////~///
// const obj0 = {
// 	toString() {
// 		console.log("toString invoked");
// 		return [];
// 	},
// 	valueOf() {
// 		console.log("valueOf invoked");
// 		return [];
// 	},
// };

// console.log(`${obj0}`);
// toString invoked
// valueOf invoked
// TypeError ...

//~///////~///
const obj0 = {
	toString() {
		console.log("toString invoked");
		return "hello";
	},
	valueOf() {
		console.log("valueOf invoked");
		return 123;
	},
};

console.log(obj0 + 1);

//~///////~///
const obj1 = {
	valueOf() {
		console.log("valueOf invoked");
		// return true;
		return false;
	},
};

console.log(obj1 + 1); // 0+1 = 1 - if return false // 1+1 = 2 - if return true

//~///////~///
const obj2 = {
	[Symbol.toPrimitive](hint) {
		if (hint === "string") {
			return "hello";
		} else {
			return 123;
		}
	},
};

console.log(`${obj2}`); // hello
console.log(obj2 + 1); // 124

//~///////~///
// Value | ToNumber
// ”” | 0
// “0” | 0
// “-0” | -0
// ” 123 | “ 123
// “45” | 45
// “abc” | NaN
// false | 0
// true | 1
// undefined | NaN
// null | 0

// Value | ToString
// null | “null”
// undefined | “undefined”
// 0 | “0”
// -0 | “0”
// true | “true”
// false | “false”
// 123 | “123”
// NaN | “NaN”

//~///////~///
//  falsy values:
// • false
// • 0, -0, 0n
// • undefined
// • null
// • NaN
// • ””

//~///////~///
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined); // false

console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(null == undefined); // true

//~///////~///
const someVal = {};

if (someVal == true) {
	console.log("if");
} else {
	console.log("else");
}

// C L O U S E R S

//~///////~///
// function outerFn() {
// 	const outerVar = 123;
// 	return function inner() {
// 		console.log(outerVar);
// 	};
// }
// const innerFn = outerFn();
// innerFn();

//~///////~///
// let isReading = true;
// function learnJavaScript() {
// 	console.log(isReading);
// }

// learnJavaScript();

//~///////~///
let isReading = true;
function learnJavaScript() {
	function stepsToLearnJavaScript() {
		console.log(isReading);
	}
	stepsToLearnJavaScript();
}

learnJavaScript();

//~///////~///
function outerFn() {
	const outerVar = 123;
	return (() => {
		console.log(outerVar);
	})();
}
// const innerFn = outerFn();
// innerFn();
outerFn();

//~///////~///
let score = 150;

function logScore() {
	console.log(score);
}

logScore();

//~///////~///
function createGreeting(greetMsg) {
	function greet(personName) {
		console.log(`${greetMsg} ${personName}!`);
	}
	return greet;
}
// const sayHello = createGreeting("Hello");
// sayHello("Mike");

//~///////~///
for (var i = 1; i <= 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
} //4,4,4

//~///////~///
for (var i = 1; i <= 3; i++) {
	((counter) => {
		setTimeout(() => {
			console.log(counter, i);
		}, 1000);
	})(i);
} // 1,2,3 | 4,4,4

//~///////~///
// let - is block-scoped variable
for (let i = 1; i <= 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
} // 1,2,3

//~///////~///
// const bank = (function () {
// 	// private data
// 	const accounts = [];
// 	// private function
// 	function getInternalBankLogs() {
// 		// ...
// 	}
// 	/*** public functions ***/

// 	function openAccount(data) {
// 		// some logic...
// 		// ...
// 		accounts.push(newAccount);
// 	}

// 	function deposit(accountNum, amount) {
// 		// ...
// 	}

// 	function withdraw(accoutNum, amount) {
// 		// ...
// 	}

// 	return {
// 		openAccount,
// 		deposit,
// 		withdraw,
// 	};
// })();
// bank.openAccount({}); // ok
// bank.accounts(); // error, not accessible

//~///////~///
const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = new Object();
console.log(obj4.toString());

//~///////~///
{
	function Car(name, model) {
		this.name = name;
		this.model = model;
	}
	// console.log(Car.prototype.constructor === Car);

	//~///////~///
	Car.prototype.start = function () {
		console.log("starting the engine of " + this.name);
	};

	const honda = new Car("honda", "1996");
	const toyota = new Car("toyota", "2000");

	honda.start(); // starting the engine of honda
	toyota.start(); // starting the engine of toyota
	console.log(Object.getPrototypeOf(honda) === Car.prototype);
}

//~///////~///
console.log(Object.getPrototypeOf(Object) == Function.prototype);
// true

console.log(Object.getPrototypeOf(Function) == Function.prototype);
// true

//~///////~///
// const user = { name: "John Doe" };
// console.log(user.__proto__);

//~///////~///
const propertyPrinter = {
	printOwnPropertyNames: function () {
		// "this" refers to the object on which
		// this function is called
		for (let prop of Object.getOwnPropertyNames(this)) {
			console.log(prop);
		}
	},
};
const user0 = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
};
// set the prototype of the "user" object
Object.setPrototypeOf(user0, propertyPrinter);
// prototype methods are now accessible
user0.printOwnPropertyNames();

//~///////~///
// create a new object and set "propertyPrinter"
// object as its prototype
const user1 = Object.create(propertyPrinter);
user1.firstName = "John";
user1.lastName = "Doe";
user1.age = 25;
// prototype methods are accessible
user1.printOwnPropertyNames();

//~///////~///
// const obj5 = Object.create(null);
// console.log(obj5.toString());

//~///////~///
const user2 = {};
// malicious code adding "isAdmin"
// property in the prototype object
Object.prototype.isAdmin = true;
if (user2.isAdmin) {
	console.log("grant access");
}
const user3 = Object.create(null);
// malicious code adding "isAdmin"
// property in the prototype object
Object.prototype.isAdmin = true;
if (user3.isAdmin) {
	console.log("grant access");
} else {
	console.log("access denied");
}

//~///////~///
class Persona {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduce() {
		console.log(`My name is ${this.name} and I am ${this.age} years old`);
	}
}
class Student extends Persona {
	constructor(name, age, id) {
		// delegate the responsibility of initializing
		// "name" and "age" properties to the parent class
		super(name, age);
		this.id = id;
	}
}
let ps = new Student("Link", 0, 999);
console.log(ps);

// T H I S

//~///////~///
const student = {
	id: 123,
	name: "John Doe",
	email: "john@email.com",
	printInfo: function () {
		console.log(`${this.id} - ${this.name} - ${this.email}`);
	},
};
student.printInfo();

//~///////~///
// function orderFood() {
// 	console.log("Order confirmed against the name: " + this.fullName);
// }
// orderFood();

//~///////~///
function Recipe(name, ingredients) {
	this.name = name;
	this.ingredients = ingredients;
}
let rec = new Recipe("Pasta", ["someingredient", "2", "3"]);
console.log(rec);

//~///////~///
class Shape {
	constructor(color) {
		this.color = color;
	}
	printColor() {
		console.log(this.color);
	}
}
const circle = new Shape("Red");
circle.printColor();
// const printColorFn = circle.printColor;
// printColorFn(); // loose this

//~///////~///
// const btn = document.querySelector("button");
// class FormHandler {
// 	constructor(submitBtn) {
// 		submitBtn.addEventListener("click", this.submitForm);
// 	}

// 	submitForm() {
// 		console.log("form submitted");
// 		console.log(this);
// 	}
// }
// new FormHandler(btn);

//~///////~///
// function Counter(startingValue) {
// 	this.value = startingValue;
// }
// Counter.prototype.incrementFactory = function (incrementStep) {
// 	// const thisVal = this; // save `this` value
// 	// return function () {
// 	// 	// use `thisVar` variable instead of `this`
// 	// 	thisVal.value += incrementStep;
// 	// 	console.log(thisVal.value);
// 	// };
// 	return () => {
// 		this.value += incrementStep;
// 		console.log(this.value);
// 	};
// };
// const counter = new Counter(0);
// const increment5 = counter.incrementFactory(5);
// increment5(); // 5
// increment5(); // 10
// increment5(); // 15

//~///////~///
const btn = document.querySelector("button");
class FormHandler {
	constructor(submitBtn) {
		// submitBtn.addEventListener("click", () => this.submitForm());
		submitBtn.addEventListener("click", this.submitForm.bind(this));
	}
	submitForm() {
		this.sendRequest();
		this.sendSomething();
		// ERROR: this.sendRequest is not a function
	}
	sendRequest() {
		console.log("sending request...");
	}
	sendSomething() {
		console.log("something!");
	}
}
new FormHandler(btn);

//~///////~///
function greet() {
	console.log(this.animal, "typically sleep between", this.sleepDuration);
}
const obj6 = {
	animal: "cats",
	sleepDuration: "12 and 16 hours",
};
greet.call(obj6);

//~///////~///
function Counter(startingValue) {
	this.value = startingValue;
}
Counter.prototype.incrementFactory = function (incrementStep) {
	const incrementFn = function () {
		this.value += incrementStep;
		console.log(this.value);
	};

	// return a function with `this` bound
	// to the object used to invoke the
	// `incrementFactory` method
	return incrementFn.bind(this);
};
const counter = new Counter(0);
const increment5 = counter.incrementFactory(5);
increment5(); // 5
increment5(); // 10
increment5(); // 15

//~///////~///
const john = {
	name: "John",
	sayHello() {
		console.log("Hello, I am " + this.name);
	},
};
const sarah = {
	name: "Sarah",
};
// borrow method from john
const sayHello = john.sayHello;
sayHello.call(sarah);

//~///////~///
function Employee(nameq, age, id) {
	this.nameq = nameq;
	this.age = age;
	this.id = id;
}
function BankEmployee(nameq, age, id, bankName) {
	// delegate the responsibility of adding
	// "name", "age", and "id" properties to
	// the Person constructor
	Employee.call(this, nameq, age, id);
	this.bankName = bankName;
}
let employee = new BankEmployee("name", "age", "id", "bankName");
console.log(employee);

//~///////~///
// As this can have different values in different contexts, let us summarize what value this has in
// different contexts:
// • In the case of an arrow function, the value of this is taken from the surrounding context.
// • In the case of a regular function, the value of this depends on how a function is called and
// whether the code is executed in strict mode or not.
// – If a function is invoked as a constructor using the new keyword, the value of this is the
// newly created object.
// – If the value of this is explicitly set using bind, call, or apply functions, then the value of
// this is whatever value is passed as the first argument to these functions.
// – If a function is invoked as a “method”, the value of this is the object used to call the
// method.
// – If the function is invoked without any object, i.e., as a “function”, the value of this is the
// global object in non-strict mode and undefined in strict mode.
// • In DOM event handler callbacks, the value of this is the HTML element that triggered the
// event.
// • In the global scope in browsers, this refers to the global window object.
// • In NodeJS, code at the top level is executed in a module scope. In ECMAScript modules, this is
// undefined at the top level of a module because the code in the ECMAScript module is implicitly
// executed in strict mode. In CommonJS modules, this refers to the module.exports object at
// the top level of a module.

//S Y M B O L S
//~///////~///
const sym = Symbol();
const obj7 = {};
obj7[sym] = "hello";
// const obj7 = {
// 	[sym]: "hello",
// };
console.log(obj7[sym]);

//~///////~///
const name = Symbol();
const person = {
	[name]: "John Doe",
	age: 20,
};
// only sees the "age" property
for (const prop in person) {
	console.log(prop);
}
console.log(Object.keys(person)); // ["age"]
console.log(Object.getOwnPropertyNames(person)); // ["age"]
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertySymbols(person));

//~///////~///
const propSymbol = Symbol("property symbol");
console.log(propSymbol.description);

//~///////~///
const movie = {
	name: "Jurassic Park",
	releaseDate: "09,June,1993",
	[Symbol.toPrimitive](hint) {
		if (hint === "number") {
			return new Date(this.releaseDate).getTime();
		} else {
			return this.name;
		}
	},
};
console.log(Number(movie));
console.log(String(movie));

//~///////~///
const task = {
	title: "exercise",
	isComplete: false,
	[Symbol.toStringTag]: "Task",
};
console.log(task.toString()); // [object Task]

// A S Y N C

//~///////~///
function block() {
	const start = new Date();
	while (new Date() - start < 3000) {}
}
console.log("Before long running operation");
// block();
console.log("After long running operation");

//~///////~///
function fetchUser(url) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", function () {
		// check if the operation is complete
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// Request succeeded
				const data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				// Request failed
				const error = new Error("Failed to fetch todo");
				console.log(error);
			}
		}
	});

	xhr.open("GET", url);
	xhr.send();
}
fetchUser("https://jsonplaceholder.typicode.com/todos/1");

//~///////~///
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
	console.log(event);
	setTimeout(function () {
		console.log("logged after 2 seconds");
	}, 2000);
});

// P R O M I S E

//~///////~///
setTimeout(function () {
	console.log("logged after approximately 4 seconds instead of 2");
}, 2000);
const start = new Date();
// takes approximately 4 seconds to execute
while (new Date() - start < 4000) {}

const p1 = fetch(/* some url */);
p1.then(
	(response) => {
		// code to execute if the promise fulfills
	},
	(error) => {
		// code to execute if the promise is rejected
	},
);
