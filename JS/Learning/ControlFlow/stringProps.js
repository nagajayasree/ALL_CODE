const person = {
    name : 'jaya',
    age : null,
    place : 'hyderabad'
}

showProperties(person);

function showProperties(obj){ 
    for(let key in obj){
        if(typeof obj[key] === 'string')
        console.log(key,obj[key]);
    }
}