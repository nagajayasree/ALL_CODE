import React from 'react';

const useState = React.useState
const useEffect = React.useEffect

function OurApp() {
  const [pets, setPets] = useState([])
  
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])
  
  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])
  
  return (
    <>
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map(pet => <Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
      </ul>
    </>
  )
}

function AddPetForm(props) {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    props.setPets(prev => prev.concat({name, species, age, id: Date.now()}))
    setName("")
    setSpecies("")
    setAge("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
  
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default OurApp;