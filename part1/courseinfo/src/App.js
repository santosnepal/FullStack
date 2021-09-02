import React from 'react';
const Header = ({header}) =>{
  return(
    <h1>{header}</h1>
  )
}
const Part =({part,excercise})=>{
  return(
    <div>
      {part} : {excercise}
    </div>
  )
}
const Content = ({part,excercise})=>{
  return(
    <div>
     <Part part={part.part1} excercise={excercise.excercies1}/>
     <Part part={part.part2} excercise={excercise.excercies2}/>
     <Part part={part.part3} excercise={excercise.excercies3}/>
     </div>
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
      <Content part ={{part1,part2,part3}} excercise={{excercies1,excercies2,excercies3}}/>
      <Total part1 ={excercies1} part2={excercies2} part3={excercies3}/>
    </div>
  )
}

export default App