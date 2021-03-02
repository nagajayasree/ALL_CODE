//program to get the current date

let d = new Date();
let date = d.getDate(),month = d.getMonth(),year = d.getFullYear();
console.log(date+"/"+month+"/"+year); 

// let dateFormat = (d = new Date()) => {
//     let date = d.getDate(),month = d.getMonth(),year = d.getFullYear();
//     return `${date}/${month}/${year}`;
// }

// console.log(dateFormat());