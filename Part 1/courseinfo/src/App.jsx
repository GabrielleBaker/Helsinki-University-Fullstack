const Header = ({course}) => <h1>{course}</h1>

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
    return(
      <div>
        {parts.map((part)=>
        <p key={part.id}>
          <Part part={part}/>
        </p>
        )}
        </div>
      
    )
  }
 

const Course = ({course}) => {
return (
  <div>
  <Header course={course.name}/>
  <Content parts={course.parts}/>
  <Total parts={course.parts}/>
  </div>
)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

    return <Course course={course} />
  
}

export default App