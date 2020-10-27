// class Person {
//     name = "bob";
//     constructor() {
//         this.age = 32;
//     }
//     greet() {
//         console.log(`hi my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

function Person() {
    this.name = "bob";
    this.age = 32;
    this.greet = function () {
        console.log(`hi my name is ${this.name} and I am ${this.age} years old`);
    }

}


Person.prototype.printAge = function () {

    console.log("!!!" + this.age)

}
person = new Person();
person.greet();
person.printAge();
// console.log("****" + person.printAge());
// console.log(person.__proto__);
