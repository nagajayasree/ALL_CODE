const myTodos = ['walking','js','music'];
//console.log(myTodos.indexOf('js'));

const newTodos =[{
    title: 'walking',
    isDone: true,
},{
    title: 'js',
    isDone: false,
},{
    title:'music',
    isDone: false,
}];

// const index = newTodos.findIndex(function(todo,index){
//     return todo.title === 'js';
// })

// console.log(index);

//Method1
const findTodo = function(myTodos,title){
    let index = myTodos.findIndex(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase() 
    })
    return myTodos[index]
}

console.log(findTodo(newTodos,'walking'));

//Method2
const findTodo = function(myTodos,title){
    let titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned;
}

let result = findTodo(newTodos,'music');
console.log(result);