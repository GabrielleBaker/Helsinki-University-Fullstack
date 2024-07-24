import { useState } from 'react'

 //button component
 const Buttons=({onPress,text})=>{
  return(
    //event handler is function ref from prop
      <button onClick={onPress}>
        {text}
      </button>
  )
}

const AnecText = ({anecdotes,selected})=>{
  return(
    <div>
      {anecdotes[selected]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //get length of anecdotes array set as max, math.floor(math.random *max)
// will start from zero and go to the max -1 so no need to + or - 1 for array length

  const setChoice = ()=> {
    let max =anecdotes.length;
    const randomNumber = Math.floor(Math.random()*max);
    setSelected(randomNumber);
   // console.log(randomNumber);
  }
   

  const [selected, setSelected] = useState(0)

  return (
    <div>
      <AnecText anecdotes={anecdotes} selected={selected}/>
      <Buttons text ='Next anecdote' onPress={setChoice}/>
    </div>
  )
}

export default App