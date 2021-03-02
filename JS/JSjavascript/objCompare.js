//program to compare two objects to determine 
//if the 1st one contains same properties as 2nd one.

// let a = 1,b = 1;
// let arr1 = [1,2,3,4],arr2 = [1,2,3,4];

// let book = {
//     pages : "white",
//     length : "12cm",
//     isCovered : false
// }

// let pen = {
//     color : "blue",
//     length : "8cm",
//     cap : true
// }

// // console.log(pen);
// // console.log(book);

// console.log(a===b);
// console.log(arr1===arr2);
// console.log(pen === book);

// let book1 = book;
// console.log(book1);
// console.log(book == book1);
// console.log(Object.is(book,book1));

let obj1 = {a:1,b:2,c:3};
let obj2 = {a:1,b:1,c:3};
let obj3 = {a:1,b:1,d:3};

// let x = Object.keys(obj1);
// let y = Object.keys(obj2);
// let z = Object.keys(obj3);

let objectsEqual = (a,b) =>
    Object.keys(a).every(key => b[key]);

console.log(objectsEqual(obj1,obj2));
console.log(objectsEqual(obj2,obj3));
