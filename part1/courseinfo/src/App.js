import React from 'react';
const Header = ({header}) =>{
  return(
    <h1>{header}</h1>
  )
}
const Content = ({part,excercise})=>{
  return(
    <p>
      {part} : {excercise}
    </p>
  )
}
const Total =({part1,part2,part3})=>{
  return(
    <p>
      Total Excercises = {part1+part2+part3}
    </p>
  )

}
const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercies1 = 10
  const part2 = 'Using props to pass data'
  const excercies2 = 7
  const part3 = 'State of a component'
  const excercies3 = 14
  
  return (
    <div>
      <Header header = {course}/>
      <Content part ={part1} excercise={excercies1}/>
      <Content part ={part2} excercise={excercies2}/>
      <Content part ={part3} excercise={excercies3}/>
      <Total part1 ={excercies1} part2={excercies2} part3={excercies3}/>
    </div>
  )
}

export default App