import { useState, useEffect } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import AllPersons from './components/AllPersons';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber]=useState('');
  const [showAll, setShowAll] = useState(true);
  const [searchName,setSearchName]=useState('');
  const [Message, setMessage] = useState(null);
  const [color, setColor] = useState('');

  //fetching data from server
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])



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
      <Notification message={Message} color={color}/>
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
          setMessage={setMessage}
          setColor={setColor}
      />
       <h2>Numbers</h2>
        <AllPersons 
          persons={persons} 
          searchName={searchName} 
          showAll={showAll}
          setPersons={setPersons}
          setColor={setColor}
          setMessage={setMessage}
          />
    </div>
  );
};

export default App;
