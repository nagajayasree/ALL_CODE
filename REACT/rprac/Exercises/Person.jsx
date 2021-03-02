import React from 'react';

const useState = React.useState
const useEffect = React.useEffect

function PersonInfo(){
    const [persons,setPersons] = useState([])

    //to run once when component is rendered first time
    useEffect(()=>{
        if(localStorage.getItem('PersonData')){
            setPersons(JSON.parse(localStorage.getItem('PersonData')))
        }
    },[])

    //when it runs everytime when state changes
    useEffect(()=>{
        localStorage.setItem('PersonData',JSON.stringify(persons))
    },[persons])

    return(
        <>
        <DeletePerson setPersons={setPersons}/>
        <ul>
            {persons.map(person=><Person setPersons={setPersons} key ={person.name} name={person.name} job={person.job}/>)}
        </ul>
        </>
    )
}

function DeletePerson(props){
    const [name,setName] = useState()
    const [job,setJob] = useState()
    
    function handleSubmit(e){
        e.preventDefault()
        props.setPersons(prev => prev.concat({name,job}))
        setName('')
        setJob('')
    }
 
    return(
        <form onSubmit={handleSubmit}>
            <input value = {name} onChange={e=>setName(e.target.value)} placeholder='Name'/>
            <input value = {job} onChange={e=>setJob(e.target.value)} placeholder='job'/>
            <button>Generate</button>
        </form>
    )
}

function Person(props){
    function handleDelete(){
        props.setPersons(prev => prev.filter(person=>person.name != props.name))
    }
    return <p>{props.name} is working as {props.job}<button onClick={handleDelete}>Delete</button></p>
}

export default PersonInfo;