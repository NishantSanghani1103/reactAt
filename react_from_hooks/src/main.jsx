import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Zode from './Zode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Zode />
  </StrictMode>,
)
