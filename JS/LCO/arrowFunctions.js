const myTodos = ['walking','js','music','coding','design','art'];
const newTodos =[{
    title: 'walking',
    isDone: true,
},{
    title: 'js',
    isDone: false,
},{
    title:'music',
    isDone: false,
},{
    title: 'coding',
    isDone: true
},{
    title: 'design',
    isDone: false,
},{
    title: 'art',
    isDone: true
}];

const thingsDone = newTodos.filter((todo) => todo.isDone === true);
const thingsNotDone = newTodos.filter((todo) => todo.isDone === false);  

console.log(thingsDone);
console.log(thingsNotDone);

