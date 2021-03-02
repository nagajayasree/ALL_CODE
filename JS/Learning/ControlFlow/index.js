//object

let person = {
    name : "Jim",
    age : 30
};

person['name'] = "Luci";
person.name = "Jack";

console.log(person.name);

//arrays

let selectedColors = ['red','green'];

console.log(selectedColors[0]);

//performs tasks

function greet(name,lastName) {
    console.log('Hello '+ name  + ' ' + lastName);
}

greet('John','Smith');

//calculates values
function square(number) {
return number * number;
}

console.log(square(2));

//arithmetic operations
let x = 12 , y = 20;

console.log(++x);
console.log(x++);
console.log(x);

console.log(--y);
console.log(y--);
console.log(y);

//swapping
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
