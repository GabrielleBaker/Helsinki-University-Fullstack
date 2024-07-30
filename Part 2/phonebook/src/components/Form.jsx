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