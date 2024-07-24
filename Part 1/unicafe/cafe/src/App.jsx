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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setGoodTo = () => setGood(good+1);
  /*could also be written as 
  const setGoodTo = () => { 
    return (
    setGood(good+1)
    ) 
    }
  */
  const setNeutralTo = () => setNeutral(neutral+1);
  const setBadTo = () => setBad(bad+1);  

  //title sections component
  const Titles =({text})=><h1>{text}</h1>

  //statistics component
  const Stats = () => {
    return(
      <p>
      Good: {good} 
      <br></br>
      Neutral: {neutral} 
      <br></br>
      Bad: {bad}
      </p>
    )
  }

  return (
    <div>
      <Titles text={'Give feedback'}/>
      <Buttons onPress={setGoodTo} text='Good'/> <Buttons onPress={setNeutralTo} text='Neutral'/> <Buttons onPress={setBadTo} text='Bad'/>
      <Titles text={'Statistics'}/>
      <Stats/>
    </div>
  )
}

export default App