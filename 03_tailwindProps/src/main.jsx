import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="DSA" />
    <App name="JAVA" />
    <App name="React" />
    <App name="Python" />
    <App name="JavaScript" />
    <App name="Html" />
  </StrictMode>
)