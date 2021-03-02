function person(name,age,isActive){
    this.name = name,
    this.age = age,
    this.isActive = isActive
}

let john = new person('i am john',30,true);
let sam = new person('i am sam',23,true);
let jersey = new person('i am jersey',20,false);

let users = new Map();

users.set('john',john);
users.set('sam',sam);
users.set('jersey',jersey);

//console.log(users);
// console.log(users.size);
// console.log(users.get('sam'));

// console.log(users.keys());
// console.log(users.values());

for (const key of users.keys()) {
    //console.log(key);
}

for (const value of users.values()) {
    //console.log(value);
    //console.log(value.age);
}

for (const [key,value] of users.entries()) {
    //console.log(key + ' = ' + value.name);
    //console.log(`${key} = ${value.isActive}`); ///above line in literals
}

users.forEach(key => {
  //  console.log(key);    
});

users.forEach(value => {
//    console.log(value.age);
});

users.forEach((value,key) => {
   // console.log(`${key} = ${value.isActive}`);
});

//let arrOfArr = [['one','1'],['two','2'],['three','3']];

let arr1 = {
    name: 'one',
    number: '1'
}

let arr2 = {
    name: 'two',
    number: '2'
}

let arr3 = {
    name: 'three',
    number: '3'
}

let newArr = new Map();

newArr.set('one',arr1);
newArr.set('two',arr2);
newArr.set('three',arr3);
console.log(newArr);

newArr.forEach((value,key) => {
    console.log(`${key} = ${value.number}`);
});