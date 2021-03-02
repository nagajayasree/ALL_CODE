// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }  
//this can written using conditional operator as:


let result = (a,b) => (a + b < 4) ? "below" : "over";
console.log(result(1,2));