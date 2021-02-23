import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
      </header>
    </div>
  );
}

function Person(pros) {
  const personStyle={
    border:'2px solid red',
    margin:'20px',
    width: '400px',
    color: 'yellow'
  }
  return(
    <div style={personStyle}>
      <h1>Name: {pros.name}</h1>
      <h3>Hero Of The Year</h3>
    </div>
  )

  
}

export default App;
