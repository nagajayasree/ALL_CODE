//variables
let a = 10;
var b = 69;
const num = 23;
//num = 79;

console.log(a);//10

//console.log(num);//type error

let name = "js"; // string
console.log(name);

let isRaining = true;//boolean
console.log(isRaining);

let age;
console.log(age);//undefined

//array
let veggies = ["potato","peas","brinjal","carrot"];
console.log(veggies);


//function
//method1 
function sum(a,b){
    let c = a + b;
    console.log(c);
}
sum(18,4);

//method2
let sub = function(a,b){
    let c = a - b;
    console.log(c);
}
sub(20,4);

//arrow function
const veggi = veggies.find(veggi =>veggies.name = "potato");
console.log(veggi);

//object
let person = {
    firstName : "john",
    lastName : "richard"
}
console.log(person);

//factory function
function createObj(name,attribute){
    let obj = {
        name,
        attribute
    };
    return obj;
}

let Obj1 = createObj("car","color");
console.log(Obj1);

//constructor function
function Obj(name,attribute){
    this.name = name;
    this.attribute = attribute;
}

const obj1 = new Obj("pen","cap");
console.log(obj1);
