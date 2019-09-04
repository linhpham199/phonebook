import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personServices from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ filteredPersons, setFilteredPersons ] = useState([])

  useEffect(() => {
    personServices
      .getAll()
      .then(data => setPersons(data))
  }, [])

  const addPerson = (newPerson) => {
    const existedPerson = persons.find(person => person.name === newPerson.name)
    
    const updatePerson = () => {
      const confirm = window.confirm(`${existedPerson.name} is already added to the phonebook. Do you want to replace?`)

      if (confirm) {
        personServices.update(existedPerson.id, newPerson).then(() => personServices.getAll().then(data => setPersons(data)))
      }
    }

    const createPerson = () => {
      personServices.create(newPerson).then(() => personServices.getAll().then(data => setPersons(data)))
    }

    existedPerson !== undefined
    ? updatePerson()
    : createPerson()
  }

  const deletePerson = (id) => {
    const confirm = window.confirm("Do you want to delete?")

    if (confirm) {
      personServices.del(id).then(() => personServices.getAll().then(data => setPersons(data)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Add a new</h2> 
      <PersonForm addPerson={person => addPerson(person)}/>
      <h2>Numbers</h2>
      <ul style={{listStyleType: 'none'}}>
        { filteredPersons.length === 0
          ? persons.map(person => <Person key={person.id} person={person}  
                                          deletePerson={() => deletePerson(person.id)}/>)
          : filteredPersons.map(person => <Person key={person.number} person={person}  />)}
      </ul>
    </div>
  )
}

export default App