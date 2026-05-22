// https://github.com/lydiahallie/javascript-questions/tree/master/ru-RU

// function bark() {
// 	console.log("Woof!");
// }

// bark.animal = "dog";
// console.log(bark.animal);

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// Все объекты имеют прототипы, кроме базового объекта.
// Базовый объект — это объект, созданный пользователем, или объект, созданный с использованием ключевого слова new.
// Базовый объект имеет доступ к некоторым методам и свойствам, таким как .toString. Вот почему вы можете использовать встроенные методы JavaScript!
// Все такие способы доступны в прототипе. Хотя JavaScript не может найти метод непосредственно в вашем объекте, он идет вниз по цепочке прототипов и находит его там, что делает его доступным.

let number = 0;

console.log(number++); // 0 — постфиксный инкремент
console.log(++number); // 2 — префиксный инкремент
console.log(number); // 2 — итоговое значение

let a = { age: 18 };
let b = a;
let c = a;
console.log(b === c); // true
console.log({ age: 18 } === { age: 18 }); //false
console.log(b === { age: 18 }); //false

eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
