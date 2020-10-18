class Person {
   // _n = "babak";
    constructor() {
        this.name = "babak"
        this.age = 36;
    }
    greet (){
        console.log(`hi i am  ${this.name} and my age is ${this.age}`)
    }
    add(v1,v2){
        console.log(v1+v2);
    }
    get n(){
        return _n;
    }
    set n(v){
        this._n=v;
    }
    static hi(){
        console.log("what",this._n)
    }
}
function Person1() {
    this.name = "babak";
    this.age = 36;
    this.greet = function () {
        console.log(`hi i am  ${this.name} and my age is ${this.age}`)
    }
}

Person1.prototype={
    printAge(){
        console.log(`my age is ${this.age}`)
    }
}
Person2 = {
    name: "babak",
    age: 36,
    greet: function () {
        console.log(`hi i am  ${this.name} and my age is ${this.age}`)
    }
}
person = new Person();
Person._n=12;
Person.hi()
person.greet();

person1 = new Person1();
person1.greet();
person1.printAge()

Person2.greet()
fruits=["apple","orane"];
fruits.forEach(element => {
    console.log(element);
});

func1=(var1,var2)=>{
    console.log("888",var1+var2)
}
 const button = document.getElementById('btn');
 //button.addEventListener('click', func1.bind(null,1,2));
 button.addEventListener('click', person.add.bind(person,1,2));