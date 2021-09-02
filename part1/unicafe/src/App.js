import React,{useState} from 'react';
const Statistics = ({good,neutral,bad})=>{
  const average = good*1+neutral*0+bad*-1
  const goodPercntage = (good/(good+neutral+bad))*100
  const total = good+bad+neutral
  return(
    <div>
      <h1>Statistics</h1>
        <p>Good : {good}</p>
        <p>Neuutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p>Average : {average}</p>
        <p>Positive : {goodPercntage} %</p>
    </div>
  )
}
const App =()=>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const goodUpdatehandler =()=>{
    setGood(good+1)
  }
  const neutralUpdatehandler =()=>{
    setNeutral(neutral+1)
  }
  const badUpdatehandler =()=>{
    setBad(bad+1)
  }
  return(
    <div>
      <div>
        <h1>Give Your FeedBack</h1>
        <button onClick={goodUpdatehandler}>Good</button>
        <button onClick={neutralUpdatehandler}>Neutral</button>
        <button onClick={badUpdatehandler}>Bad</button>
      </div>
     <Statistics good={good} bad ={bad} neutral={neutral}/>

    </div>
  )
}
export default App