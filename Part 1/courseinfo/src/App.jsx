const Header = ({course}) => <h1>{course}</h1>

const Total =({parts})=>{

  const exerciseArray = parts.map((item) => item.exercises);
  let sum=0;

  //for each loop through and add it to the sum
  exerciseArray.forEach((exercise)=>{
    sum+=exercise;
  });

  return(
    <div>
      <h3>Total number of {sum} exercises</h3>
    </div>

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