//joining arrays
const numbers = [1,2,3];
console.log(numbers);

const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
console.log(message);

const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//sorting arrays

const array = [2,3,1];
array.sort();
console.log(array);

array.reverse();
console.log(array);

//sorting reference type
const courses = [
    { id : 1, name : 'Node.js' },
    { id : 2, name : 'JavaScript' }
];

courses.sort(function(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(courses);

//testing the elements
let nums = [1,2,3,4,5];
const allPositive = nums.every(function(value){
    return value >= 0;
});
console.log(allPositive);

let arr = [1,2,3,-1,4,5];
const atLeastOnePositive = arr.some(function(value){
    return value >= 0;
});
console.log(atLeastOnePositive);

//filtering an array
const nos = [1,2,-1,3];

const filtered = nos.filter(n => n >= 0);
console.log(filtered);
