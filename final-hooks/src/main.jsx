import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Memo from './pages/ReactMemo/Memo.jsx'
import UseCallBack from './pages/UseCallBack/UseCallBack.jsx'
import UseRef from './pages/UseRef/UseRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memo />
    <UseCallBack />
    <UseRef />
  </StrictMode>,
)
