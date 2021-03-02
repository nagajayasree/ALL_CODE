// console.log("hello world!");
// let name = "john";
// console.log("hello" + name);
// console.log("hello",`${name}`);

// let myTodos = [];

// myTodos.unshift("learn js");
// myTodos.unshift("code in js");
// myTodos.unshift("make a project");

// //console.log(myTodos);

// for(let i = 0;i < myTodos.length;i++){
//     console.log(`your task no.${i+1} and task is:${myTodos[i]}`);
// }

//obj
// let course = {
//     name: "javascript",
//     price: 500,
//     description:"contains basics of javascript"
// }

// console.log(`course is ${course.name},offered at price ${course.price} and description is: ${course.description}`);
//console.log(course);

let myTodos = {
    day: "monday",
    meetings: 0,
    meetingsDone: 0,

    addMeetings: function(num){
        this.meetings = this.meetings + num;
    },

    completedMeetings: function(count){
        this.meetingsDone = this.meetingsDone - count;
    },
    
    reset: function(){
        this.meetings = 0;
        this.meetingsDone = 0;
    },

    summary: function(){
        return `you have ${this.meetings + this.meetingsDone} meetings today!`;
    }
}

myTodos.addMeetings(5);
myTodos.completedMeetings(4);
myTodos.reset();
console.log(myTodos);
console.log(myTodos.summary());