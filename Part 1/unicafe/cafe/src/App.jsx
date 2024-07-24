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

// statistic line component exercise 1.11
//return as table data instead of text
 const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

//statistics component exercise 1.8
const Stats = ({good, bad, neutral, all}) => {
  let average ;
  let positive ;
  //message if no feedback given yet
  //exercise 1.9
  if(all===0){
      return(
        <p>No feedback given</p>
      );
  }  
  //once feedback has been given
  //exercise 1.7 more stats
  else{
   
    if (all !==0 ){
        average= (good - bad) / all;}
        else {average =0;}
  
   
    if(all !== 0){
       positive = (good / all) * 100;}
       else {positive =0;}

  //1.11 using array of data to feed to StatisticLine to create table
  const statsArray=  [
      {text:'Good:', value:good} ,
      {text:'Neutral:', value:neutral} ,
      {text:'Bad:', value:bad},
      {text:'All:', value:all} ,
      {text:'Average:', value:average},
      {text:'Positive:', value:positive}
]
  
    return(
        <table>
          {
          //exercise 1.11
          //return a table, then use StatisticLine component to create table rows from
          //the array of data statsArray    
          }
          <tbody>
            {statsArray.map((stat,index)=>(
              <StatisticLine key={index} text={stat.text} value={stat.value}/>
            ))}
          </tbody>
        </table>
    )
  }
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