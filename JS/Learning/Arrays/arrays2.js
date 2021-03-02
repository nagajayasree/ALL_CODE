//emptying an array
let numbers = [1,2,3,4];

//method 1
numbers = [];
console.log(numbers);

//method 2
numbers.length = 0;
console.log(numbers);

//method 3
numbers.splice(0,numbers.length);
console.log(numbers);

//method 4
while(numbers.length>0)
numbers.pop();
console.log(numbers);


//combining and slicing arrays
const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2,5);
console.log(slice);

//in reference type
const arr1 = [{id:1}];
const arr2 = [4,5,6];

const combine = arr1.concat(arr2);
arr1[0].id = 10;
console.log(combine);

//spread operator
const firstArray = ['a','b','c'];
const secondArray = ['x','y','z'];

const combination = [...firstArray,...secondArray];
console.log(combination);

const combination2 = [...firstArray,1,...secondArray,2];
console.log(combination2);

const copy = [...combined];
console.log(copy);

//Iterating an array
const nums = [1,2,3,4];

//method 1
for(let num of nums)
console.log(num);

//method 2 using foreach 
nums.forEach(function(num){
    console.log(num);
});

//modifying by using arrow function
nums.forEach(num => console.log(num));

//printing using index
nums.forEach((num,index) => console.log(index,num));
