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
//returns the anecdote selected
const AnecText = ({anecdotes,selected})=>{
  return(
    <div>
      {anecdotes[selected].text}
      <VoteCount anecdotes={anecdotes} index={selected}/>
    </div>
  )
}
//tell the vote count
const VoteCount = ({anecdotes, index})=>{
  return(
    <p>
      has {anecdotes[index].votes} votes.
    </p>
  )
}

const App = () => {
  const originalAnecdotesArray = [
    {text:'If it hurts, do it more often.', votes:0},
    {text:'Adding manpower to a late software project makes it later!', votes:0},
    {text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes:0},
    {text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes:0},
    {text:'Premature optimization is the root of all evil.', votes:0},
    {text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes:0},
    {text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes:0},
    {text:'The only way to go fast, is to go well.', votes:0}
  ]

  //copy of original array to new array
  const [anecdotes,setAnecdotes] = useState(originalAnecdotesArray);
  const [selected, setSelected] = useState(0);

//get length of anecdotes array set as max, math.floor(math.random *max)
// will start from zero and go to the max -1 so no need to + or - 1 for array length
//set selected anecdote to random number
  const setChoice = () => {
    let max =anecdotes.length;
    const randomNumber = Math.floor(Math.random()*max);
    setSelected(randomNumber);
   // console.log(randomNumber);
  }
   
  const setVote = () => {
    const newAnecdotes = anecdotes.map((anecdote, index) => {
      if(index === selected){
        return{...anecdote, votes:anecdote.votes +1};
      }
      return anecdote;
    });
    setAnecdotes(newAnecdotes);
  }


  return (
    <div>
      <AnecText anecdotes={anecdotes} selected={selected}/>
      <Buttons text ='Next anecdote' onPress={setChoice}/>
      <Buttons text ='Vote' onPress={setVote}/>
    </div>
  )
}

export default App