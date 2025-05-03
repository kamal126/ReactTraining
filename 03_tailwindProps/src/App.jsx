import React from 'react';
import './App.css';
import { useState } from 'react';

function App({ name }) {
  const [message, setMessage] = useState('');

  const timeout = () => {
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }

  const show = () => {
    setMessage(`Hello ${name}`);
    timeout();
  };
  return (
    <>
      <div
        className="h-50 w-50 text-center text-3xl font-bold underline text-red-500 bg-blue-500
        hover:bg-blue-600 p-4 m-4 rounded-lg shadow-lg 
        transition duration-300 ease-in-out transform hover:scale-105"
      >
        Hello
        <button
          className="mt-10 p-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded border-2 border-green-700 shadow-lg"
          onClick={show}
        >
          Click Me
        </button>
        <p id="msg" className="text-lg text-orange-700">
          {message}
        </p>
      </div>
    </>
  );
}

export default App;