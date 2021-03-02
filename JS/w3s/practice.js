let a = new Array([1,2,3,4,4,5]);
console.log(a);
a.push(10);
console.log(a);
//a.pop();
//console.log(a);

let s = new Set([1,2,3,4,4,5]);
console.log(s);
console.log(s.values());
console.log(s.has(1));
console.log(s.delete(1));
console.log(s);
console.log(s.clear());
console.log(s.values());

let fruits = ["apples","bananas"];
console.log(typeof fruits);
