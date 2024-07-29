//gives title as h2
const Header = ({courses}) => {
    return(
      <h2>
        {courses}
      </h2> 
      )
  }
  //use for h1 titles
  const Titles = ({title})=>{
    return(
      <h1>
      {title}
      </h1>
      )
  }
  
  const Total =({parts})=>{
    //reduce iterates through array adding each item value to the sum
    //reduce takes a function + an initial value as params
    //initial value is 0 here, it sets sum to 0 at start.
   const totalSum = parts.reduce((sum,item)=> sum + item.exercises,0);
  
    return(
        <h3>Total number of {totalSum} exercises</h3>
    )
  }
  
   const Part = ({ part }) => 
       <>
        {part.name} {part.exercises}
        </>
  
    const Content = ({parts}) => {
    //map through each part of the parts array of each program using each
    //part id as key
    //use the part's data (name and exercises) to create a Part from
    // the part component and return it as an html paragraph 
      return(
        <div>
        {parts.map((part) => (
          <p key={part.id}>
            <Part part={part} />
          </p>
        ))}
      </div>
        
      )
    }
   
  
  const Course = ({courses}) => {
  return (
    <div>
      <Titles title={courses.title}/>
      {
  //map through the array of programs in the courses, using program id as the key
  //for each program array
  //create a header from the program name, then create a content object
  //from the content component using the program parts as the parts prop
      }
      {courses.programs.map((program) => (
      <div key={program.id}>
      <Header courses={program.name}/>
      <Content  parts={program.parts} />
      <Total parts={program.parts}/>
      </div>
        ))}
      
    </div>
  )
  }
  export default Course