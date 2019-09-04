import React, { useState } from 'react'

const PersonForm = ({ addPerson }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    } 

    addPerson(newPerson)

    setNewName('')
    setNewNumber('')

    return newPerson
  }

  return (
    <form>
      <div>
        <div>name: <input name="name" value={newName} onChange={handleNameChange}/></div>
        <div>number: <input name="number" value={newNumber} onChange={handleNumberChange}/></div>
      </div>
      <div>
        <button type="submit" disabled={!newName || !newNumber} onClick={handleSubmit}>add</button>
      </div>
    </form>
  )
}

export default PersonForm
