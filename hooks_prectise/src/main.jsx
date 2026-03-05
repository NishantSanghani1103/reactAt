import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Memo from './Memo.jsx'
import Effect from './Effect.jsx'

createRoot(document.getElementById('root')).render(
  <>


    <App />
    <Memo />
    <Effect />
  </>

)
