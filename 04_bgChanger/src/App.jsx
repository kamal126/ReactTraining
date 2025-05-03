import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState('olive');
  return (
    <div className='w-full h-screen duration-200' 
    style={{ backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div
        className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
        >
          <button 
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-105'
          style={{backgroundColor: "red", hover: {backgroundColor: "white"}}}
          >Red</button>
          <button
          onClick = {()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-105'
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={()=> setColor("green")}
          style={{backgroundColor: "green"}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-105'
          >Green</button>
          <button
          onClick={()=> setColor("yellow")}
          style={{backgroundColor: "yellow"}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg coursor-pointer hover:scale-105'
          >Yellow</button>
          <button
          onClick={()=> setColor("white")}
          style={{backgroundColor: "white"}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-105'
          >White</button>
          <button
          onClick={()=> setColor("Orange")}
          style={{backgroundColor: "orange"}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-105'
          >Orange</button>
          <button
          onClick={()=> setColor("purple")}
          style={{backgroundColor: "purple"}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-105'
          >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
