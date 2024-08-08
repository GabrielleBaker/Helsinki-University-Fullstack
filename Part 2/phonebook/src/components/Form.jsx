//import axios from 'axios';
import personService from '../services/persons'

const Form = ({
  newName,
  newNumber,
  setPersons,
  persons,
  setNewName,
  setNewNumber,
  handleNumberChange,
  handlePersonChange
}) => {

//adding new person to phonebook
const addPerson = (event) => {
  event.preventDefault();
  //create new person object from input fields
  const personObject = {
    name: newName,
    number: newNumber,
    //id: persons.length+1
  }

  //check if person already exists using find. find method returns first match from array
  //object reference equality doesnt factor when using find.name
  //if using find person ===personobject => wont work as expected bc its checking memory location
  //but using find person.name and personobject.name compares the value of properties not the 
  //objects themselves
  //if a match is not found, returns undefined 
  
  const existingPerson = persons.find(person => person.name === personObject.name);

  if (existingPerson) {
    
    //alert(`${newName} is already added to phonebook`)
    if (window.confirm(`${newName} is already added to the phonebook, replace
      the old number with the new one?`)){
        personService
        //need to get the id and use it to update the person object
        .update(existingPerson.id, {...existingPerson,number:newNumber})
        .then(returnedPerson => {
          setPersons(persons.map(person=>person.id !== existingPerson.id ? person : returnedPerson))
        })
    }
    //console.log('person exists');
  } else {
   //console.log(personObject.id);
   personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
   })

  }

  setNewName('');
  setNewNumber('');


};

    return(
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
    )
}
export default Form