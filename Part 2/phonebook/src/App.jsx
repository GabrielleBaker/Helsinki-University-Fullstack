import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber]=useState('');
  const [showAll, setShowAll] = useState(true);
  const [searchName,setSearchName]=useState('');


  // if persons exists to filter, create new array of persons to show ie filtered people
  //filter the persons array and add all people that contain whatever searchName consists of
  //search updates as typing in input field occurs
  //toLowerCase ensures case insensitivity 
  const filteredPersons= showAll
  ? persons
  : persons.filter(person=>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );


  const addPerson = (event) => {
    event.preventDefault();
    //create new person object from input fields
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
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
     //console.log(personObject.id);
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
  //once typing in the search input field occurs, the showall sets to false, and starts
  //displaying the filtered persons array instead of all persons
  const handleSearchChange = (event)=>{
    setSearchName(event.target.value);
    setShowAll(false);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter search: <input
            value={searchName}
            onChange={handleSearchChange}
          />
        </div>
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
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
          <Person key={person.id} person={person} />
        )}
    </div>
  );
};

export default App;
