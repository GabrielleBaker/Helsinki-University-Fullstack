const App = () => {
  const course = 'Half Stack application development'
  /* exercise 1.1 and 1.2
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const contents = [{part: part1,exercises: exercises1},
                    {part: part2,exercises: exercises2},
                    {part: part3,exercises: exercises3}]
*/
//exercise 1.3
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
}


return (
  <div>
    <Header course={course}/>
    <Content part={part1}/>
    <Content part={part2}/>
    <Content part={part3}/>
    <Total part1={part1} part2={part2} part3={part3}/>
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
//exercise 1.1
/*
const Content = ({contents})=>{

  return(
    <div>
    {
    //https://www.w3schools.com/react/react_es6_array_methods.asp
    //https://www.dhiwise.com/post/mastering-react-map-a-comprehensive-guide-to-list-rendering
    //iterate through array using map only-> error calling for key, used item.part as key
    }
      {contents.map((item)=>
      <p key={item.part}>
        {item.part} {item.exercises}
      </p>
      )}
      </div>
    
  )
}*/

//exercise 1.2
 /*
const Content = (props)=>{

  return(
    <div>
     exercise 1.1 and 1.2
    <Part part={props.part1} exercises={props.exercises1} />
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={ props.exercises3}/>
    
    </div>
  )
}*/

/*const Part = ({part,exercises})=>{

  return(
    <p>
        {part} {exercises}
    </p>
  )
}*/

/*const Total =({contents})=>{
  //map exercises to new array
  const exerciseArray = contents.map((item) => item.exercises);
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
}*/

//exercise 1.3
const Content = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
}
//exercise 1.3
const Total = ({ part1, part2, part3 }) => {
  const sum = part1.exercises + part2.exercises + part3.exercises;
  return (
    <div>
      <p>Total number of exercises {sum}</p>
    </div>
  );
}

export default App