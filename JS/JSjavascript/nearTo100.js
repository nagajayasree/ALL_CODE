//program to find a number which is near to 100

let nearestNum = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(nearestNum(1,90));
console.log(nearestNum(95,67));
