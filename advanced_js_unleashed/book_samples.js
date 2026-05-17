"use strict";
// function process() {
// 	var fnInsideBlockVar;
// 	if (true) {
// 		let fnInsideBlock = function fnInsideBlock() {
// 			console.log("I am inside a block");
// 		};
// 		console.log("processing...");
// 		fnInsideBlockVar = fnInsideBlock;
// 	}
// 	fnInsideBlockVar();
// }

// process();
// //~///////~///

// // let Car = "Honda";

// // if (true) {
// // 	console.log(typeof Car); // error

// // 	class Car {}
// // }
// //~///////~///

// var count = 5;

// {
// 	console.log(count); // hoisted but cannot access due to TDZ
// 	// let count = 10;
// }
// //~///////~///

// console.log(typeof Car); // undefined
// console.log(typeof Person); // undefined
// var Car = class {
// 	constructor(model) {
// 		this.model = model;
// 	}
// };
// var Person = function (name) {
// 	this.name = name;
// };
// //~///////~///

// var todoList = ["grocery", "exercise", "meeting"];

// function emptyTodoList() {
// 	todoList = [];
// }

// console.log(window.hasOwnProperty("todoList")); // true
// console.log(window.hasOwnProperty("emptyTodoList"));
// //~///////~///

// // const todoList = ["grocery", "exercise", "meeting"];

// // let emptyTodoList = function () {
// // 	todoList = [];
// // };

// // console.log(window.hasOwnProperty("todoList")); // false
// // console.log(window.hasOwnProperty("emptyTodoList")); // false
// //~///////~///

// // var result;
// // function printSquare(num) {
// // 	result = num * num;
// // 	console.log(result); // 64
// // }
// // printSquare(8);
// // console.log("implicit global: " + result);
// //~///////~///

// console.log(document.getElementById("mainHeading"));
// console.log(window.hasOwnProperty("mainHeading")); //false // proto //
// console.log(window.mainHeading);
// //~///////~///

// let hobby = "reading";
// function printHobbies() {
// 	const hobby = "traveling";
// 	console.log(hobby); // traveling
// }
// printHobbies();
// //~///////~///

// var prefix = ">";
// function log(logLevel, msg) {
// 	let prefix = ":::";
// 	console.log(`${prefix} ${logLevel} : ${msg}`);
// }
// log("debug", "error caught"); // ::: debug : error caught
// console.log(window.prefix); // >

// //~///////~///
// let a, b, rest;
// [a, b] = [10, 20];
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// //~///////~///
// // function sum(...theArgs) {
// // 	let total = 0;
// // 	for (const arg of theArgs) {
// // 		total += arg;
// // 	}
// // 	return total;
// // }

// // console.log(sum(1, 2, 3));

// //~///////~///
// function paramScope(arr = ["initial array"], buff = () => arr) {
// 	// var arr = [1, 2, 3];
// 	arr = [1, 2, 3];
// 	console.log(arr); // [1, 2, 3]
// 	console.log(buff()); // ["initial array"]
// }

// paramScope();

// //~///////~///
// let fn = function namedFn() {
// 	let namedFn = 123;
// 	console.log(namedFn);
// };

// fn();

// //~///////~///
// const myName = "John doe";
// function hello() {
// 	const greeting = "hello " + myName;
// 	function greet() {
// 		console.log(greeting);
// 	}
// 	greet();
// }

// hello();

// //~///////~///
// const value1 = "5";
// const value2 = 9;
// // let sum = value1 + value2;
// // let sum = value2+value1;
// let sum = Number(value1) + value2;

// console.log(sum);

// //~///////~///
// const result = "50" - 20;
// console.log(result);

// // C O E R C I O N

// //~///////~///
// // const obj = { a: 123 };
// // console.log(obj);
// // obj.toString();
// // console.log(obj);

// //~///////~///
// // const obj = {
// // 	toString() {
// // 		console.log("toString invoked");
// // 		return "hello world";
// // 	},
// // 	// toString() {
// // 	// 	console.log("toString invoked");
// // 	// 	return true;
// // 	// },
// // 	valueOf() {
// // 		console.log("valueOf invoked");
// // 		return 123;
// // 	},
// // };
// // console.log(`${obj}`);

// //~///////~///
// const obj = {
// 	toString() {
// 		console.log("toString invoked");
// 		return [];
// 	},
// 	valueOf() {
// 		console.log("valueOf invoked");
// 		return 123;
// 	},
// };

// console.log(`${obj}`);
// // toString invoked
// // valueOf invoked
// // 123

// //~///////~///
// // const obj0 = {
// // 	toString() {
// // 		console.log("toString invoked");
// // 		return [];
// // 	},
// // 	valueOf() {
// // 		console.log("valueOf invoked");
// // 		return [];
// // 	},
// // };

// // console.log(`${obj0}`);
// // toString invoked
// // valueOf invoked
// // TypeError ...

// //~///////~///
// const obj0 = {
// 	toString() {
// 		console.log("toString invoked");
// 		return "hello";
// 	},
// 	valueOf() {
// 		console.log("valueOf invoked");
// 		return 123;
// 	},
// };

// console.log(obj0 + 1);

// //~///////~///
// const obj1 = {
// 	valueOf() {
// 		console.log("valueOf invoked");
// 		// return true;
// 		return false;
// 	},
// };

// console.log(obj1 + 1); // 0+1 = 1 - if return false // 1+1 = 2 - if return true

// //~///////~///
// const obj2 = {
// 	[Symbol.toPrimitive](hint) {
// 		if (hint === "string") {
// 			return "hello";
// 		} else {
// 			return 123;
// 		}
// 	},
// };

// console.log(`${obj2}`); // hello
// console.log(obj2 + 1); // 124

// //~///////~///
// // Value | ToNumber
// // ”” | 0
// // “0” | 0
// // “-0” | -0
// // ” 123 | “ 123
// // “45” | 45
// // “abc” | NaN
// // false | 0
// // true | 1
// // undefined | NaN
// // null | 0

// // Value | ToString
// // null | “null”
// // undefined | “undefined”
// // 0 | “0”
// // -0 | “0”
// // true | “true”
// // false | “false”
// // 123 | “123”
// // NaN | “NaN”

// //~///////~///
// //  falsy values:
// // • false
// // • 0, -0, 0n
// // • undefined
// // • null
// // • NaN
// // • ””

// //~///////~///
// console.log(null === null); // true
// console.log(undefined === undefined); // true
// console.log(null === undefined); // false

// console.log(null == null); // true
// console.log(undefined == undefined); // true
// console.log(null == undefined); // true

// //~///////~///
// const someVal = {};

// if (someVal == true) {
// 	console.log("if");
// } else {
// 	console.log("else");
// }

// // C L O U S E R S

// //~///////~///
// // function outerFn() {
// // 	const outerVar = 123;
// // 	return function inner() {
// // 		console.log(outerVar);
// // 	};
// // }
// // const innerFn = outerFn();
// // innerFn();

// //~///////~///
// // let isReading = true;
// // function learnJavaScript() {
// // 	console.log(isReading);
// // }

// // learnJavaScript();

// //~///////~///
// let isReading = true;
// function learnJavaScript() {
// 	function stepsToLearnJavaScript() {
// 		console.log(isReading);
// 	}
// 	stepsToLearnJavaScript();
// }

// learnJavaScript();

// //~///////~///
// function outerFn() {
// 	const outerVar = 123;
// 	return (() => {
// 		console.log(outerVar);
// 	})();
// }
// // const innerFn = outerFn();
// // innerFn();
// outerFn();

// //~///////~///
// let score = 150;

// function logScore() {
// 	console.log(score);
// }

// logScore();

// //~///////~///
// function createGreeting(greetMsg) {
// 	function greet(personName) {
// 		console.log(`${greetMsg} ${personName}!`);
// 	}
// 	return greet;
// }
// // const sayHello = createGreeting("Hello");
// // sayHello("Mike");

// //~///////~///
// for (var i = 1; i <= 3; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1000);
// } //4,4,4

// //~///////~///
// for (var i = 1; i <= 3; i++) {
// 	((counter) => {
// 		setTimeout(() => {
// 			console.log(counter, i);
// 		}, 1000);
// 	})(i);
// } // 1,2,3 | 4,4,4

// //~///////~///
// // let - is block-scoped variable
// for (let i = 1; i <= 3; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1000);
// } // 1,2,3

// //~///////~///
// // const bank = (function () {
// // 	// private data
// // 	const accounts = [];
// // 	// private function
// // 	function getInternalBankLogs() {
// // 		// ...
// // 	}
// // 	/*** public functions ***/

// // 	function openAccount(data) {
// // 		// some logic...
// // 		// ...
// // 		accounts.push(newAccount);
// // 	}

// // 	function deposit(accountNum, amount) {
// // 		// ...
// // 	}

// // 	function withdraw(accoutNum, amount) {
// // 		// ...
// // 	}

// // 	return {
// // 		openAccount,
// // 		deposit,
// // 		withdraw,
// // 	};
// // })();
// // bank.openAccount({}); // ok
// // bank.accounts(); // error, not accessible

// //~///////~///
// const obj3 = { a: 1, b: 2, c: 3 };
// const obj4 = new Object();
// console.log(obj4.toString());

// //~///////~///
// {
// 	function Car(name, model) {
// 		this.name = name;
// 		this.model = model;
// 	}
// 	// console.log(Car.prototype.constructor === Car);

// 	//~///////~///
// 	Car.prototype.start = function () {
// 		console.log("starting the engine of " + this.name);
// 	};

// 	const honda = new Car("honda", "1996");
// 	const toyota = new Car("toyota", "2000");

// 	honda.start(); // starting the engine of honda
// 	toyota.start(); // starting the engine of toyota
// 	console.log(Object.getPrototypeOf(honda) === Car.prototype);
// }

// //~///////~///
// console.log(Object.getPrototypeOf(Object) == Function.prototype);
// // true

// console.log(Object.getPrototypeOf(Function) == Function.prototype);
// // true

// //~///////~///
// // const user = { name: "John Doe" };
// // console.log(user.__proto__);

// //~///////~///
// const propertyPrinter = {
// 	printOwnPropertyNames: function () {
// 		// "this" refers to the object on which
// 		// this function is called
// 		for (let prop of Object.getOwnPropertyNames(this)) {
// 			console.log(prop);
// 		}
// 	},
// };
// const user0 = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 25,
// };
// // set the prototype of the "user" object
// Object.setPrototypeOf(user0, propertyPrinter);
// // prototype methods are now accessible
// user0.printOwnPropertyNames();

// //~///////~///
// // create a new object and set "propertyPrinter"
// // object as its prototype
// const user1 = Object.create(propertyPrinter);
// user1.firstName = "John";
// user1.lastName = "Doe";
// user1.age = 25;
// // prototype methods are accessible
// user1.printOwnPropertyNames();

// //~///////~///
// // const obj5 = Object.create(null);
// // console.log(obj5.toString());

// //~///////~///
// const user2 = {};
// // malicious code adding "isAdmin"
// // property in the prototype object
// Object.prototype.isAdmin = true;
// if (user2.isAdmin) {
// 	console.log("grant access");
// }
// const user3 = Object.create(null);
// // malicious code adding "isAdmin"
// // property in the prototype object
// Object.prototype.isAdmin = true;
// if (user3.isAdmin) {
// 	console.log("grant access");
// } else {
// 	console.log("access denied");
// }

// //~///////~///
// class Persona {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	introduce() {
// 		console.log(`My name is ${this.name} and I am ${this.age} years old`);
// 	}
// }
// class Student extends Persona {
// 	constructor(name, age, id) {
// 		// delegate the responsibility of initializing
// 		// "name" and "age" properties to the parent class
// 		super(name, age);
// 		this.id = id;
// 	}
// }
// let ps = new Student("Link", 0, 999);
// console.log(ps);

// // T H I S

// //~///////~///
// const student = {
// 	id: 123,
// 	name: "John Doe",
// 	email: "john@email.com",
// 	printInfo: function () {
// 		console.log(`${this.id} - ${this.name} - ${this.email}`);
// 	},
// };
// student.printInfo();

// //~///////~///
// // function orderFood() {
// // 	console.log("Order confirmed against the name: " + this.fullName);
// // }
// // orderFood();

// //~///////~///
// function Recipe(name, ingredients) {
// 	this.name = name;
// 	this.ingredients = ingredients;
// }
// let rec = new Recipe("Pasta", ["someingredient", "2", "3"]);
// console.log(rec);

// //~///////~///
// class Shape {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	printColor() {
// 		console.log(this.color);
// 	}
// }
// const circle = new Shape("Red");
// circle.printColor();
// // const printColorFn = circle.printColor;
// // printColorFn(); // loose this

// //~///////~///
// // const btn = document.querySelector("button");
// // class FormHandler {
// // 	constructor(submitBtn) {
// // 		submitBtn.addEventListener("click", this.submitForm);
// // 	}

// // 	submitForm() {
// // 		console.log("form submitted");
// // 		console.log(this);
// // 	}
// // }
// // new FormHandler(btn);

// //~///////~///
// // function Counter(startingValue) {
// // 	this.value = startingValue;
// // }
// // Counter.prototype.incrementFactory = function (incrementStep) {
// // 	// const thisVal = this; // save `this` value
// // 	// return function () {
// // 	// 	// use `thisVar` variable instead of `this`
// // 	// 	thisVal.value += incrementStep;
// // 	// 	console.log(thisVal.value);
// // 	// };
// // 	return () => {
// // 		this.value += incrementStep;
// // 		console.log(this.value);
// // 	};
// // };
// // const counter = new Counter(0);
// // const increment5 = counter.incrementFactory(5);
// // increment5(); // 5
// // increment5(); // 10
// // increment5(); // 15

// //~///////~///
// const btn = document.querySelector("button");
// class FormHandler {
// 	constructor(submitBtn) {
// 		// submitBtn.addEventListener("click", () => this.submitForm());
// 		submitBtn.addEventListener("click", this.submitForm.bind(this));
// 	}
// 	submitForm() {
// 		this.sendRequest();
// 		this.sendSomething();
// 		// ERROR: this.sendRequest is not a function
// 	}
// 	sendRequest() {
// 		console.log("sending request...");
// 	}
// 	sendSomething() {
// 		console.log("something!");
// 	}
// }
// new FormHandler(btn);

// //~///////~///
// function greet() {
// 	console.log(this.animal, "typically sleep between", this.sleepDuration);
// }
// const obj6 = {
// 	animal: "cats",
// 	sleepDuration: "12 and 16 hours",
// };
// greet.call(obj6);

// //~///////~///
// function Counter(startingValue) {
// 	this.value = startingValue;
// }
// Counter.prototype.incrementFactory = function (incrementStep) {
// 	const incrementFn = function () {
// 		this.value += incrementStep;
// 		console.log(this.value);
// 	};

// 	// return a function with `this` bound
// 	// to the object used to invoke the
// 	// `incrementFactory` method
// 	return incrementFn.bind(this);
// };
// const counter = new Counter(0);
// const increment5 = counter.incrementFactory(5);
// increment5(); // 5
// increment5(); // 10
// increment5(); // 15

// //~///////~///
// const john = {
// 	name: "John",
// 	sayHello() {
// 		console.log("Hello, I am " + this.name);
// 	},
// };
// const sarah = {
// 	name: "Sarah",
// };
// // borrow method from john
// const sayHello = john.sayHello;
// sayHello.call(sarah);

// //~///////~///
// function Employee(nameq, age, id) {
// 	this.nameq = nameq;
// 	this.age = age;
// 	this.id = id;
// }
// function BankEmployee(nameq, age, id, bankName) {
// 	// delegate the responsibility of adding
// 	// "name", "age", and "id" properties to
// 	// the Person constructor
// 	Employee.call(this, nameq, age, id);
// 	this.bankName = bankName;
// }
// let employee = new BankEmployee("name", "age", "id", "bankName");
// console.log(employee);

// //~///////~///
// // As this can have different values in different contexts, let us summarize what value this has in
// // different contexts:
// // • In the case of an arrow function, the value of this is taken from the surrounding context.
// // • In the case of a regular function, the value of this depends on how a function is called and
// // whether the code is executed in strict mode or not.
// // – If a function is invoked as a constructor using the new keyword, the value of this is the
// // newly created object.
// // – If the value of this is explicitly set using bind, call, or apply functions, then the value of
// // this is whatever value is passed as the first argument to these functions.
// // – If a function is invoked as a “method”, the value of this is the object used to call the
// // method.
// // – If the function is invoked without any object, i.e., as a “function”, the value of this is the
// // global object in non-strict mode and undefined in strict mode.
// // • In DOM event handler callbacks, the value of this is the HTML element that triggered the
// // event.
// // • In the global scope in browsers, this refers to the global window object.
// // • In NodeJS, code at the top level is executed in a module scope. In ECMAScript modules, this is
// // undefined at the top level of a module because the code in the ECMAScript module is implicitly
// // executed in strict mode. In CommonJS modules, this refers to the module.exports object at
// // the top level of a module.

// //S Y M B O L S
// //~///////~///
// const sym = Symbol();
// const obj7 = {};
// obj7[sym] = "hello";
// // const obj7 = {
// // 	[sym]: "hello",
// // };
// console.log(obj7[sym]);

// //~///////~///
// const name = Symbol();
// const person = {
// 	[name]: "John Doe",
// 	age: 20,
// };
// // only sees the "age" property
// for (const prop in person) {
// 	console.log(prop);
// }
// console.log(Object.keys(person)); // ["age"]
// console.log(Object.getOwnPropertyNames(person)); // ["age"]
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getOwnPropertySymbols(person));

// //~///////~///
// const propSymbol = Symbol("property symbol");
// console.log(propSymbol.description);

// //~///////~///
// const movie = {
// 	name: "Jurassic Park",
// 	releaseDate: "09,June,1993",
// 	[Symbol.toPrimitive](hint) {
// 		if (hint === "number") {
// 			return new Date(this.releaseDate).getTime();
// 		} else {
// 			return this.name;
// 		}
// 	},
// };
// console.log(Number(movie));
// console.log(String(movie));

// //~///////~///
// const task = {
// 	title: "exercise",
// 	isComplete: false,
// 	[Symbol.toStringTag]: "Task",
// };
// console.log(task.toString()); // [object Task]

// // A S Y N C

// //~///////~///
// function block() {
// 	const start = new Date();
// 	while (new Date() - start < 3000) {}
// }
// console.log("Before long running operation");
// // block();
// console.log("After long running operation");

// //~///////~///
// // function fetchUser(url) {
// // 	const xhr = new XMLHttpRequest();
// // 	xhr.addEventListener("load", function () {
// // 		// check if the operation is complete
// // 		if (xhr.readyState === 4) {
// // 			if (xhr.status === 200) {
// // 				// Request succeeded
// // 				const data = JSON.parse(xhr.responseText);
// // 				console.log(data);
// // 			} else {
// // 				// Request failed
// // 				const error = new Error("Failed to fetch todo");
// // 				console.log(error);
// // 			}
// // 		}
// // 	});

// // 	xhr.open("GET", url);
// // 	xhr.send();
// // }
// // fetchUser("https://jsonplaceholder.typicode.com/todos/1");

// //~///////~///
// const submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("click", function (event) {
// 	console.log(event);
// 	setTimeout(function () {
// 		console.log("logged after 2 seconds");
// 	}, 2000);
// });

// // P R O M I S E

// //~///////~///
// // setTimeout(function () {
// // 	console.log("logged after approximately 4 seconds instead of 2");
// // }, 2000);
// // const start = new Date();
// // // takes approximately 4 seconds to execute
// // while (new Date() - start < 4000) {}

// // const p1 = fetch(/* some url */);
// // p1.then(
// // 	(response) => {
// // 		// code to execute if the promise fulfills
// // 	},
// // 	(error) => {
// // 		// code to execute if the promise is rejected
// // 	},
// // );

// //~///////~///
// function timeout(delayInSeconds) {
// 	const delayInMilliseconds = delayInSeconds * 1000;
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), delayInMilliseconds);
// 	});
// }
// // timeout(2).then(() => {
// // 	console.log("done"); // logged after 2 seconds
// // });

// //~///////~///
// function fakeRequest(isSuccessRequest = true) {
// 	return new Promise((resolve, reject) => {
// 		// setTimeout(() => {
// 		// 	const error = new Error("request failed");
// 		// 	reject(error);
// 		// }, 2000);
// 		setTimeout(() => {
// 			if (isSuccessRequest) {
// 				const data = { name: "John Doe", favouriteLanguage: "JavaScript" };
// 				resolve(data);
// 			} else {
// 				const error = new Error("request failed");
// 				reject(error);
// 			}
// 		}, 2000);
// 	});
// }

// //~///////~///
// // T H E N
// // Original promise get *fulfilled*

// // const pRequest = fakeRequest();

// // const pThen = pRequest.then((response) => {
// // 	console.log(response);
// // 	return "success";
// // });
// // pThen.then((data) => {
// // 	console.log(data); // success
// // });

// // const pThen = pRequest.then();
// // pThen.then((data) => {
// // 	// logs the value with which pRequest fulfilled
// // 	console.log(data);
// // });

// // const pThen = pRequest.then((response) => {
// // 	throw new Error("something bad happened");
// // });
// // pThen.catch((error) => {
// // 	console.log(error.message); // something bad happened
// // });

// // const pThen = pRequest.then((response) => {
// // 	// return a promise that will be fulfilled
// // 	return fakeRequest();
// // });
// // pThen.then((response) => {
// // 	// logs the fulfillment value of
// // 	// promise returned from the fulfillment
// // 	// handler of pRequest promise
// // 	console.log(response);
// // });

// // Original promise get *rejected*
// // const pRequest = fakeRequest(false);

// // const pThen = pRequest.then((response) => {
// // 	console.log(response);
// // });
// // pThen.catch((error) => {
// // 	console.log(error.message); // request failed
// // });

// // If a rejection handler is passed to the then method, then the promise returned by the then
// // method depends on what happens inside the rejection handler. This works similarly to how it
// // works in the case of the fulfillment handler:
// // – If the rejection handler returns a non-promise value, the promise returned by the then
// // method gets fulfilled with the value returned by the rejection handler.
// // – If the rejection handler doesn’t explicitly return any value, the promise returned by the
// // then method is fulfilled with undefined as the fulfillment value.
// // – If the then method is called on the original promise but the rejection handler isn’t provided,
// // the promise returned by the then method gets rejected with the same rejection value as
// // the original promise.
// // – If the rejection handler throws any value or an error, the promise returned by the then
// // method gets rejected with the thrown value as the rejection reason or value.
// // – If the rejection handler returns a promise, the promise returned by the then method gets
// // resolved to the promise returned by the rejection handler, the same as in the case of the
// // fulfillment handler discussed earlier.

// //~///////~///
// // C A T C H
// // Original promise get *fulfilled*
// // const pRequest = fakeRequest();

// // const pCatch = pRequest.catch((error) => {
// // 	console.log(error.message);
// // });
// // pCatch.then((data) => {
// // 	// logs the fulfillment value with
// // 	// which pRequest promise fulfilled
// // 	console.log(data);
// // });

// // Original promise get *rejected*
// // const pRequest = fakeRequest(false);

// // const pCatch = pRequest.catch((error) => {
// // 	return "default value";
// // });
// // pCatch.then((data) => {
// // 	console.log(data); // default value
// // });

// // const pCatch = pRequest.catch((error) => {
// // 	console.log(error.message); // request failed
// // });
// // pCatch.then((data) => {
// // 	console.log(data); // undefined
// // });

// // const pCatch = pRequest.catch();
// // pCatch.catch((error) => {
// // 	// logs the rejection value of the
// // 	// original pRequest promise
// // 	console.log(error.message); // request failed
// // });

// // const pCatch = pRequest.catch((error) => {
// // 	// return a promise that will get fulfilled
// // 	return fakeRequest();
// // });
// // pCatch.then((data) => {
// // 	// logs the fulfillment value of
// // 	// promise returned from the rejection
// // 	// handler of pRequest promise
// // 	console.log(data);
// // });

// //~///////~///
// // F I N A L L Y

// // Original promise get *fulfilled*
// // const pRequest = fakeRequest();

// // const pFinally = pRequest.finally(() => {
// // 	console.log("finally called");
// // });
// // pFinally.then((data) => {
// // 	// logs the fulfillment value of
// // 	// the original pRequest promise
// // 	console.log(data);
// // });

// // Original promise get *rejected*
// // const pRequest = fakeRequest(false);

// // const pFinally = pRequest.finally(() => {
// // 	console.log("finally called");
// // });
// // pFinally.catch((error) => {
// // 	// logs the rejection value of
// // 	// the original pRequest promise
// // 	console.log(error.message);
// // });

// // shadowing original promise settlement
// // const pRequest = fakeRequest(false);
// // const pFinally = pRequest.finally(() => {
// // 	throw new Error("finally error");
// // });
// // pFinally.catch((error) => {
// // 	console.log(error.message); // finally error
// // });

// // const pRequest = fakeRequest();
// // const pFinally = pRequest.finally(() => {
// // 	// return a promise that will get rejected
// // 	return fakeRequest(false);
// // });
// // pFinally.catch((error) => {
// // 	// logs the rejection value of the
// // 	// promise returned from the finally callback
// // 	console.log(error.message); // request failed
// // });

// //~///////~///
// //examples
// // fakeRequest() //fulfilled
// // 	.then((response) => {
// // 		console.log(response); // { name: "John Doe", favouriteLanguage: "JavaScript" }
// // 		return "hello world";
// // 	})
// // 	.then((data) => {
// // 		console.log(data); //hello world
// // 		return "123";
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message);
// // 	});

// // fakeRequest(false) //rejected
// // 	.then((response) => {
// // 		console.log(response);
// // 		return "hello world";
// // 	})
// // 	.then((data) => {
// // 		console.log(data);
// // 		return "123";
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message); //request failed
// // 	});

// // fakeRequest()
// // 	.then((response) => {
// // 		console.log(response); // { name: "John Doe", favouriteLanguage: "JavaScript" }
// // 		return fakeRequest(false);
// // 	})
// // 	.then((data) => {
// // 		console.log(data); // request failed
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message);
// // 	});

// // fakeRequest()
// // 	.then((response) => {
// // 		console.log(response); // { name: "John Doe", favouriteLanguage: "JavaScript" }
// // 		return fakeRequest();
// // 	})
// // 	.then((data) => {
// // 		console.log(data); // { name: "John Doe", favouriteLanguage: "JavaScript" }
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message);
// // 	});

// // fakeRequest(false) //rejected
// // 	.then((response) => {
// // 		console.log(response);
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message); //request failed
// // 	});

// // fakeRequest()
// // 	.then((response) => {
// // 		return fakeRequest(false);
// // 	})
// // 	.catch((error) => {
// // 		return { data: "default data" };
// // 	})
// // 	.then((data) => {
// // 		console.log(data); //{ data: "default data" }
// // 	})
// // 	.then(() => {
// // 		throw new Error("error occurred");
// // 	})
// // 	.catch((error) => {
// // 		console.log(error.message); //error occurred
// // 	});

// //~///////~///
// // Concurrent requests

// // const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// // const url2 = "https://jsonplaceholder.typicode.com/todos/2";
// // const url3 = "https://jsonplaceholder.typicode.com/todos/3";

// // function parseFetchResponse(response) {
// // 	if (response.ok) {
// // 		return response.json();
// // 	} else {
// // 		throw new Error("request failed");
// // 	}
// // }

// // Promise.all([
// // 	fetch(url1).then(parseFetchResponse),
// // 	fetch(url2).then(parseFetchResponse),
// // 	fetch(url3).then(parseFetchResponse),
// // ])
// // 	.then((dataArr) => {
// // 		console.log(dataArr);
// // 	})
// // 	.catch((error) => console.log(error.message));

// //Request timeout

// //~///////~///
// function delayedRequest() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("hello world");
// 		}, 8000);
// 	});
// }

// // timeout promise that is rejected
// // after approximately 3 seconds
// function timeout() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const error = new Error("request timed out");
// 			reject(error);
// 		}, 3000);
// 	});
// }

// //~///////~///
// // Promise.race([delayedRequest(), timeout()])
// // 	.then((response) => {
// // 		console.log(response);
// // 	})
// // 	.catch((error) => console.log(error.message));

// // console.log(1);
// // new Promise((res, rej) => {
// // 	console.log(2);
// // });
// // console.log(3);

// // try {
// // 	new Promise((resolve) => {
// // 		throw new Error("Not Found");
// // 	});
// // } catch (e) {
// // 	console.log(e);
// // }

// // try {
// // 	new Promise((resolve) => {
// // 		try {
// // 			throw new Error("Not Found");
// // 		} catch (e1) {
// // 			console.log(e1);
// // 		}
// // 	}).catch((e2) => {
// // 		console.log(e2);
// // 	});
// // } catch (e3) {
// // 	console.log(e3);
// // }

// // function fetchTodo(url) {
// // 	fetch(url)
// // 		.then((response) => {
// // 			if (response.ok) {
// // 				return response.json();
// // 			} else {
// // 				throw new Error("request failed");
// // 			}
// // 		})
// // 		.then((data) => {
// // 			console.log(data);
// // 		})
// // 		.catch((error) => {
// // 			console.log(error.message);
// // 		});
// // }
// // const url = "https://jsonplaceholder.typicode.com/todos/1";
// // fetchTodo(url);

// //~///////~///
// // async function fetchTodo(url) {
// // 	try {
// // 		const response = await fetch(url);
// // 		if (response.ok) {
// // 			const data = await response.json();
// // 			console.log(data);
// // 		} else {
// // 			throw new Error("request failed");
// // 		}
// // 	} catch (error) {
// // 		console.log(error.message);
// // 	}
// // }
// // const url = "https://jsonplaceholder.typicode.com/todos/1";
// // fetchTodo(url);

// // A S Y N C
// // A W A I T
// //~///////~///
// // async function foo() {
// // 	return 123;
// // }
// // foo().then(console.log);
// // async function foo() {}
// // foo().then(console.log); // undefined
// // async function foo() {
// // 	throw new Error("some error occurred");
// // }
// // foo().catch((error) => console.log(error.message));

// //~///////~///
// // returns a promise that is fulfilled
// // after approximately 2 seconds
// // function getPromise() {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			resolve("hello world");
// // 		}, 2000);
// // 	});
// // }
// // async function foo() {
// // 	return getPromise();
// // }
// // foo().then(console.log); // hello world

// //~///////~///
// async function foo() {
// 	return "123";
// }
// async function bar() {
// 	const result = await foo();
// 	console.log(result); // "123"
// }
// bar();

// //Multiple await expressions
// //~///////~///
// function promisifiedRandomNumber() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			// generate a random number within range: 0 - 9
// 			const randomNum = Math.floor(Math.random() * 10);
// 			resolve(randomNum);
// 		}, 1000);
// 	});
// }
// async function random() {
// 	// 	const num1 = await promisifiedRandomNumber();
// 	// 	const num2 = await promisifiedRandomNumber();
// 	// 	const num3 = await promisifiedRandomNumber();
// 	// 	console.log(num1, num2, num3);
// 	const promiseArr = [
// 		promisifiedRandomNumber(),
// 		promisifiedRandomNumber(),
// 		promisifiedRandomNumber(),
// 	];
// 	const randomNumsArr = await Promise.all(promiseArr);
// 	console.log(randomNumsArr);
// }
// random();
// console.log("continue");

// //~///////~///
// // function promisifiedRandomNumber() {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			const randomNum = Math.floor(Math.random() * 10);
// // 			resolve(randomNum);
// // 		}, 1000);
// // 	});
// // }
// // async function random() {
// // 	const randomSum =
// // 		(await promisifiedRandomNumber()) + (await promisifiedRandomNumber());
// // 	console.log(randomSum);
// // }
// // random();

// //~///////~///
// // async function getUsersAndTasks() {
// // 	try {
// // 		const users = await fetchUsers();
// // 		const tasks = await fetchTasks();
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }

// //~///////~///
// // async function getUsersAndTasks() {
// // 	const users = await fetchUsers();
// // 	const tasks = await fetchTasks();
// // }
// // async function initApp() {
// // 	try {
// // 		await getUsersAndTasks();
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }
// // initApp();

// //~///////~///
// function getPromise() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			//0-9
// 			if (Math.random() * 10 < -1) {
// 				resolve("success");
// 			} else {
// 				reject(new Error("failed"));
// 			}
// 		}, 1000);
// 	});
// }
// // async function foo() {
// // 	return getPromise();
// // }
// // foo()
// // 	.then(() => console.log("foo promise fulfilled"))
// // 	.catch(() => console.log("foo promise failed"));

// //~///////~///
// // async function foo() {
// // 	await getPromise();
// // }
// // foo()
// // 	.then(() => console.log("foo promise fulfilled"))
// // 	.catch(() => console.log("foo promise failed"));

// //~///////~///
// async function foo() {
// 	try {
// 		await getPromise();
// 		// return await getPromise();
// 	} catch (error) {
// 		// throw new Error("123"); // fulfilled always if do not throw error
// 		console.log("inside catch block of foo function");
// 		return "error caught in foo";
// 	}
// }
// foo()
// 	.then(() => console.log("foo promise fulfilled"))
// 	.catch(() => console.log("foo promise failed"));

// async function waitAndMaybeReject() {
// 	// Wait one second
// 	await new Promise((r) => setTimeout(r, 1000));
// 	// Toss a coin
// 	const isHeads = Boolean(Math.round(Math.random()));
// 	if (isHeads) return "yay";
// 	throw Error("Boo!");
// }
// async function foo() {
// 	try {
// 		console.log("inside try block");
// 		// waitAndMaybeReject();
// 		// await waitAndMaybeReject();
// 		// return waitAndMaybeReject();
// 		// return await waitAndMaybeReject();
// 		const fulfilledValue = await waitAndMaybeReject();
// 		return fulfilledValue;
// 	} catch (e) {
// 		return "caught";
// 	}
// }
// console.log(foo());

//~///////~///
// const printRandomNumber = async () => {
// 	const randomNum = await Math.floor(Math.random() * 10); //job ("microtask")
// 	console.log(randomNum);
// };
// printRandomNumber();
// console.log("before printing random number"); //"task"

// //~///////~///
// console.log("start");
// setTimeout(() => {
// 	console.log("setTimeout callback with 500ms delay");
// }, 500);
// Promise.resolve()
// 	.then(() => {
// 		console.log("first 'then' callback");
// 	})
// 	.then(() => {
// 		console.log("second 'then' callback");
// 	})
// 	.then(() => {
// 		console.log("third 'then' callback");
// 	});

// setTimeout(() => {
// 	console.log("setTimeout callback with 0ms delay");
// }, 0);

// console.log("end");
// task queue:
// -----------
// [
// task(execute setTimeout callback),
// task(execute setTimeout callback)
// ]
// microtask queue:
// ----------------
// one after another got queued and resolve in output
//  1.[job(execute fulfillment callback)]
// 	2.[job(execute fulfillment callback)]
// 	3.[job(execute fulfillment callback)]
//
//  output:
//  -------
//  start
//  end

/*
 start
 end
 first 'then' callback
 second 'then' callback
 third 'then' callback
 setTimeout callback with 0ms delay
 setTimeout callback with 500ms delay
 */

//~///////~///
// Source - https://stackoverflow.com/q/63052649
// Posted by Chor, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-17, License - CC BY-SA 4.0
// Source - https://stackoverflow.com/q/72306157
// Posted by YPChen
// Retrieved 2026-05-17, License - CC BY-SA 4.0

// new Promise((resolve) => {
// 	console.log(1);
// 	resolve();
// })
// 	.then(async () => {
// 		console.log(2);
// 	})
// 	.then(async () => {
// 		console.log(3);
// 	}); // attention async!

// new Promise((resolve) => {
// 	console.log("a");
// 	resolve();
// })
// 	.then(() => {
// 		console.log("b");
// 	})
// 	.then(() => {
// 		console.log("c");
// 	})
// 	.then(() => {
// 		console.log("d");
// 	})
// 	.then(() => {
// 		console.log("e");
// 	});

//~///////~///
// Source - https://stackoverflow.com/q/68784426
// Posted by snowy, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-17, License - CC BY-SA 4.0

// Promise.resolve(1)
// 	.then((x) => console.log(1)) //ff
// 	.catch((x) => console.log(2)) //skip
// 	.then((x) => console.log(3));

// Promise.reject(1)
// 	.then((x) => console.log(4))
// 	//.then(x => console.log(5))
// 	.catch((x) => console.log(6)) //ff
// 	.then((x) => console.log(7));

//~///////~///
// Source - https://stackoverflow.com/q/68882535
// Posted by trigold, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-17, License - CC BY-SA 4.0

// Promise.resolve().then(() => console.log(2));
// (async () => console.log(await 6))(); //  (Promise.resolve(6))
// console.log(1);
// (async () => await console.log(3))();
// //(async () => await console.log(3))(); — async IIFE.
// // Внутри: await console.log(3).
// // Сначала выполнится выражение справа от await: console.log(3) — это синхронный вызов,
// //  он сразу выводит 3 и возвращает undefined. Затем await применяется к результату (undefined).
// //  Это эквивалентно await
// Promise.resolve().then(() => console.log(5));
// console.log(4);
// output: 1 3 4 2 6 5

//~///////~///

// console.log("script start");
// setTimeout(function () {
// 	console.log("setTimeout");
// }, 0);
// Promise.resolve()
// 	.then(function () {
// 		console.log("promise1");
// 	})
// 	.then(function () {
// 		console.log("promise2");
// 	});
// console.log("script end");
// output: script start, script end, p1,p2, timeout (DEPENDS ON BROWSER LOL)

// ..Сюр... https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//~///////~///
// function fetchData(url) {
// 	return fetch(url).then((res) => res.json(res));
// }

// function fetchData(url) {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			/* do something with the data */
// 		})
// 		.catch((err) => {
// 			/* error handling code */
// 		});
// }
// fetchData(/* some url */);

//~///////~///
// const p = (async () => {
// 	throw new Error("error");
// })();

// p.catch((e) => console.log(e.message));
// using await inside the executor function,
// this should be a signal to you that you don’t need the promise constructor at all

// Iterators and Generators
//~///////~///
// const myMap = new Map();
// myMap.set("a", 1);
// myMap.set("b", 2);
// myMap.set("c", 3);
// // get the array iterator object
// const mapIterator = myMap[Symbol.iterator]();
// // get the first iterator result object
// let result = mapIterator.next();
// // keep getting new iterator result objects
// // until the "done" property of the iterator
// // result object is false
// while (!result.done) {
// 	console.log(result.value);
// 	result = mapIterator.next();
// }

// 212 page
