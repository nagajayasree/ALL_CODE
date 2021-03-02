//adding
const numbers = [3,4];

//to add at the end
numbers.push(5,6);
console.log(numbers);

//to add at the beginning
numbers.unshift(1,2);
console.log(numbers);

//to add at the middle or somewhere
numbers.splice(2,0,'a','b');
console.log(numbers);

numbers.splice(0,4,'a','b');
console.log(numbers);

//finding elements in primitive data types
const array = [1,2,3,1,4];

console.log(array.indexOf(1));
console.log(array.indexOf('1'));
console.log(array.indexOf('a'));
console.log(array.indexOf(1) !== -1);
//another form
console.log(array.includes(1));
console.log(array.lastIndexOf(1));
console.log(array.indexOf(1,2));

//finding elements in reference data types
const courses = [
    {id : 1,name : 'a'},
    {id : 2,name : 'b'},
];

const course = courses.find(function(course){
    return course.name === 'a';
});
console.log(course);

const course1 = courses.findIndex(function(course1){
    return course1.name === 'a';
});
console.log(course1);

//arrow function
const course2 = courses.find(course2 => course2.name === 'b');
console.log(course2);

//removing
const arr_num = [1,2,3,4];

//remove at the end
const last = arr_num.pop();
console.log(arr_num);
console.log(last);

//beginning
const first = arr_num.shift();
console.log(first);
console.log(arr_num);

//middle
arr_num.splice(0,1);
console.log(arr_num);