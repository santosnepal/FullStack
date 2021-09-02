import React,{useState} from 'react';
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
      <div>
        <h1>Statistics</h1>
        <p>Good : {good}</p>
        <p>Neuutral : {neutral}</p>
        <p>Bad : {bad}</p>
      </div>

    </div>
  )
}
export default App