import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber]=useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    //check if person already exists using find. find method returns first match from array
    //object reference equality doesnt factor when using find.name
    //if using find person ===personobject => wont work as expected bc its checking memory location
    //but using find person.name and personobject.name compares the value of properties not the 
    //objects themselves
    //if a match is not found, returns undefined 
    const existingPerson = persons.find(person => person.name === personObject.name);

    if (existingPerson) {
      alert(`${newName} is already added to phonebook`)
      //console.log('person exists');
    } else {
     // console.log('adding new person');
      setPersons(persons.concat(personObject));
    }

    setNewName('');
    setNewNumber('');
  };
 

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
          
          </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  );
};

export default App;
