import React from 'react';

const useState = React.useState

function OurApp(){
    const [pets,setPets] = useState([])
    return(
        <>
        <AddPetForm setPets={setPets}/>
        <ul>
            {pets.map(pet=><Pet name={pet.name} species={pet.species} age={pet.age}/>)}
        </ul>
        </>
    )
}

function AddPetForm(props){
    const [name,setName] = useState()
    const [species,setSpecies] = useState()
    const [age,setAge] = useState()

    function handleSubmit(e){
        e.preventDefault()
        props.setPets(prev => prev.concat({name,species,age}))
        setName('')
        setSpecies('')
        setAge('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add New Pet</legend>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder='Name'/>
                <input value={species} onChange={e=>setSpecies(e.target.value)} placeholder='species'/>
                <input value={age} onChange={e=>setAge(e.target.value)} placeholder='age in years'/>
                <button>Add Pet</button>
            </fieldset>
        </form>
    )
}

function Pet(props){
return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
}

export default OurApp;