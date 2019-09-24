import React from 'react'

const Filter = ({ persons, setFilteredPersons }) => {
  const handleFilter = (event) => {

    console.log(event.target.value)

    if (event.target.value === '') {
      setFilteredPersons()
    } else {
      var filtered = persons.filter(person => person.name.toLowerCase().includes(event.target.value))
      if (filtered === undefined) {
        setFilteredPersons([])
      } else {
        setFilteredPersons(filtered)
      }
    }
  }

  return (
    <div>Filter shown with <input onChange={handleFilter}/></div>    
  )
}

export default Filter
