// console.log(document.getElementById('id1'));

// const getElement1 = document.getElement('p');
// console.log(getElement1);

// const getElement2 = document.getElementById('id1');
// console.log(getElement2);

// const getElement3 = document.getElementsByClassName('.class1');
// console.log(getElement3);

// const getElement4 = document.querySelector('p');
// console.log(getElement4);

// const getElement5 = document.querySelectorAll('p');
// console.log(getElement5);

// const myElements = document.querySelector('p');
// myElements.textContent = 'i am being changed by js';

// const myElements1 = document.querySelectorAll('p')

// myElements1.forEach(p => {
//     p.textContent = 'i am changed using js';
// });

//creating new element

const myNewPara = document.createElement('p');
myNewPara.textContent = 'I was added via js';

document.querySelector('body').appendChild(myNewPara);

document.querySelector('button').addEventListener('click',(event) => {
    event.target.textContent = 'I was clicked';
})

