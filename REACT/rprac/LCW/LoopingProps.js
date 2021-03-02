import React from 'react';

const persons = [
    {name:'abc',job:'teacher',age:'34'},
    {name:'cde',job:'doctor',age:'45'},
    {name:'efg',job:'lawyer',age:'39'},
    {name:'ghi',job:'actor',age:'42'},
];

function Info(){
    return(
        <>
        <ul>
            {persons.map(function(person){
                return <Person name={person.name} job={person.job} age={person.age}/>
            })}
        </ul>
        </>
    )
}

function Person(props){
return <li>{props.name} is a {props.job} and is {props.age} years old.</li>
}

// ReactDOM.render(<Info />, document.querySelector("root"))

export default Info;