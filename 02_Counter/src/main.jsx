import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='root'>
    <App />
    <App />
    <App />
    <App />
    </div>
  </StrictMode>,
)
