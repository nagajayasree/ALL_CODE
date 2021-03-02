let student = {
    name : 'abc',
    section : 'II',
    rollno : 23
}

console.log(student);
delete student.rollno;
console.log(student);
let objLength = Object.keys(student).length;
console.log(objLength);