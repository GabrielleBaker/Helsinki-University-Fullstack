const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

//exercise 1.5
return (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
); 
}


const Header = ({course})=>{
  return(
    <h1>
    {course}
    </h1>
    )
}


const Content = ({parts})=>{

  return(
    <div>
      {parts.map((item)=>
      <p key={item.name}>
        {item.name} {item.exercises}
      </p>
      )}
      </div>
    
  )
}


const Total =({parts})=>{

    const exerciseArray = parts.map((item) => item.exercises);
    let sum=0;

    //for each loop through and add it to the sum
    exerciseArray.forEach((exercise)=>{
      sum+=exercise;
    });

    return(
      <div>
        <p>Total number of exercises {sum}</p>
      </div>

    )
}



export default App