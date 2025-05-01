import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCounter] = useState(0);

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  const subValue = () => {
    setCounter(prevCounter => prevCounter - 1);
  }
  const resetValue = () => {
    setCounter(0);
  }

  const handler = () =>{
   if(count==20){
    setCounter(0);
   }

  }
  return (
    <><div className='root'>
    <center className='App'>
      <h1>Counter: {count}</h1>
      <button onClick={() => { addValue(); handler(); }}>Add</button>
      <button id='button' onClick={() => { subValue(); handler(); }}>Subtract</button>
      <button onClick={resetValue}>Reset</button>
    </center>
    
    </div></>
  )
}

export default App
