import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <div>
          <h1>Currency Converter</h1>
          <p>Convert your currencies easily and quickly!</p>
          
        </div>
      </center>
    </>
  )
}

export default App
