import { useState } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import AllPersons from './components/AllPersons';

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

  //event handlers
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
        <Search 
          handleSearchChange={handleSearchChange}
          searchName={searchName}
        />
        <Form
          newName={newName}
          newNumber={newNumber}
          setPersons={setPersons}
          persons={persons}
          setNewName={setNewName}
          setNewNumber={setNewNumber}
          handleNumberChange={handleNumberChange}
          handlePersonChange={handlePersonChange}
      />
       <h2>Numbers</h2>
        <AllPersons 
          persons={persons} 
          searchName={searchName} 
          showAll={showAll}/>
    </div>
  );
};

export default App;
