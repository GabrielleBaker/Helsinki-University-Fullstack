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

 //title sections component
 const Titles =({text})=><h1>{text}</h1>

//statistics component
const Stats = ({good, bad, neutral, all}) => {
    
  let average ;
  if (all !==0 ){
      average= (good - bad) / all;}
      else {average =0;}

  let positive ;
  if(all !== 0){
     positive = (good / all) * 100;}
     else {positive =0;}

  return(
    <p>
    Good: {good} 
    <br></br>
    Neutral: {neutral} 
    <br></br>
    Bad: {bad}
    <br></br>
    All: {all}
    <br></br>
    Average: {average} 
    <br></br>
    Positive: {positive} %
    </p>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll]=useState(0);
  

  const setGoodTo = () => {
    setGood(good+1) 
    setAll(all+1)
  }
  // 1.6 could also be written as const setGoodTo = () => setGood(good+1)
 
  const setNeutralTo = () => {
    setNeutral(neutral+1) 
    setAll(all+1)
  }

  const setBadTo = () => {
    setBad(bad+1)
    setAll(all+1)
  }


  return (
    <div>
      <Titles text={'Give feedback'}/>
      <Buttons onPress={setGoodTo} text='Good'/> <Buttons onPress={setNeutralTo} text='Neutral'/> <Buttons onPress={setBadTo} text='Bad'/>
      <Titles text={'Statistics'}/>
      <Stats good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}

export default App