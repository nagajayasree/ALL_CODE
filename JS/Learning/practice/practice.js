// let person = {
//     firstName : "john",
//     lastName : "ethen"
// };

// let a = 23;
// let ab = [1,2,3];
// console.log(person);
// document.write(person.firstName);

let para = document.querySelector('p');

let para2 = document.querySelector('.reply');

let para3 = document.querySelector('div.reply');

let body = document.querySelector('body > h1');

// console.log(para);
// console.log(para2);
// console.log(para3);
// console.log(body);

let paras = document.querySelectorAll('p');

let replies = document.querySelectorAll('.reply')

// console.log(paras);
// console.log(replies);

let title = document.getElementById("title");
console.log(title);

let replies2 = document.getElementsByClassName("reply");
console.log(replies2);

let paras2 = document.getElementsByTagName("p");
console.log(paras2);

para.innerHTML = "Hii";
para.innerText = "gm";
