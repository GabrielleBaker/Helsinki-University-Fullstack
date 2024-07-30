import Person from "./Person"

const AllPersons = ({ persons, showAll,searchName }) => {
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
    return (
        <div>
        {filteredPersons.map(person => 
          <Person key={person.id} person={person} />
        )}
          </div>
    )
  }
  
  export default AllPersons