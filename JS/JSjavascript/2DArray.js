//program to convert a comma seperated values(csv) string
//to a 2D array.A new line indicates a new row in the array.

let ipstr = `a,b,c 
d,e,f
g,h,i`;

let str = `ape,bat,cat
dog,egg,fog`;

let getArray = (csvStr) => csvStr.split('\n').map(row => row.split(','));
let makeArray = (CSVStr) => CSVStr.split('\n').map(row =>row.split(','));

console.log(getArray(ipstr));
console.log(makeArray(str));