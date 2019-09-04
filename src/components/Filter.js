import React from 'react'

const Filter = ({ persons, setFilteredPersons }) => {
  const handleFilter = (event) => {

    console.log(event.target.value)

    event.target.value === ''
    ? setFilteredPersons([])
    : setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value)))

  }

  return (
    <div>Filter shown with <input onChange={handleFilter}/></div>    
  )
}

export default Filter
