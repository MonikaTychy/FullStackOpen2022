import React from 'react';

const Total = (props) => {
  return (
  <p>Number of exercises {props.exerciseSum}</p>
  );
}

const Content = (props) => {
  return (
    <div>
    <p>{props.part} {props.exercises}</p>
    </div>
  );
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const App = () => {
  let course = 'Half Stack application development';
  let part1 = 'Fundamentals of React';
  let exercises1 = 10;
  let part2 = 'Using props to pass data';
  let exercises2 = 7;
  let part3 = 'State of a component';
  let exercises3 = 14;

  return (
    <div className="App">
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exerciseSum={exercises1 + exercises2 + exercises3}/>
      
    </div>
  );
}

export default App

