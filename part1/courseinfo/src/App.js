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
  const part1 = {
    name:'Fundamentals of React',
    excercies : 10
  }
  const part2 ={
    name:'Using props to pass data',
    excercies:7
  }
  const part3 ={
    name:'State of a component',
    excercies:14
  }

  return (
    <div>
      <Header header = {course}/>
      <Content part ={{part1:part1.name,part2:part2.name,part3:part3.name}} excercise={{excercies1:part1.excercies,excercies2:part2.excercies,excercies3:part3.excercies}}/>
      <Total part1 ={part1.excercies} part2={part2.excercies} part3={part3.excercies}/>
    </div>
  )
}

export default App