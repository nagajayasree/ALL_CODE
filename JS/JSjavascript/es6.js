const array = [1,2,3,4,5];

const person = {
    name : "jaya",
    age : 24
}

array.push(6);
console.log(array);

person.name = "vimmy";
console.log(person.name);


//rest operator
let greet = (greeting,...names) =>{
    names.forEach(name => console.log(greeting + name));
}

greet('hello ','jaya','sree','ramaka');


//spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(...arr1);

let arr3 = [...arr1,...arr2,7,8,9];
console.log(arr3);

//tagged templates
const greetings = (strings,name) => {
    const now = new Date();
    const timePeriod = now.getHours() < 12 ? 'morning' : now.getHours() < 17 ? 'evening' : 'afternoon';
    return `Good ${timePeriod} ${strings[0]} ${name}`;
};

const name = "jaya";
//console.log(greetings(['hello','nice to meet you!'],' jaya'));
//console.log(greetings(`Hello ${name} nice to meet you!`));
console.log(greetings(['hello','nice to meet you!'],'jaya'));

//extended literals
console.log(Number(10).toString(2));
console.log(0b1010 === 10);

//enhanced obj literals
const username = 'admin';
const password = 'password';
const department = 'development';

const auth = {
    username,
    password,
    [department] : true,
    resetPassword:(newPassword)=>{
    }
}
console.log(auth);

//destructuring assignment
const languages = ['javascript','python','java','react','php'];
const [a,,,b,c,d = 'unknown'] = languages;
console.log(a);
console.log(b); 
console.log(c);
console.log(d);

const Auth = {
    username : 'james',
    password : 'password123',
    admin : true
};

const {admin,...restofObject} = Auth;
console.log(restofObject);

const login = ({username,password}) =>
username === 'james' && password === 'password123';

console.log(login(restofObject));