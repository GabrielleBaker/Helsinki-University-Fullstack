import Person from "./Person"
import personService from '../services/persons'
const AllPersons = ({ persons, showAll,searchName,setPersons,setColor, setMessage }) => {
    //filtering people 

   // if showAll is true, all persons show,
   //if false-> when a name is typed into input field
   // create new array of persons to show ie filtered people
  //toLowerCase ensures case insensitivity 
  const filteredPersons= showAll
  ? persons
  : persons.filter(person=>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  //delete button which gets added to each person
  const deletePerson =  (id) => {
    //find the person based on id
    const person = persons.find(p => p.id === id)

    if(window.confirm(`Delete ${person.name}?`)){
      personService
        .remove(id)
        .then(()=>{
          setPersons(persons.filter(p => p.id !== id))
          //notification
          setColor('green')
          setMessage(`${person.name} was deleted successfully`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          })
       
      //error handling notification
      .catch(error => {
        setColor('red')
        setMessage(`${person.name} was already removed from server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }
    return (
        <div>
        {filteredPersons.map(person => 
          <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)}/>
        )}
          </div>
    )
  }
  
  export default AllPersons