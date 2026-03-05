import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import LayOutEffect from './pages/LayOutEffect.jsx'
import Ref from './pages/Ref.jsx'
import Reducer from './pages/Reducer.jsx'
import Memo from './pages/Memo.jsx'
import CallBack from './pages/CallBack.jsx'
import Id from './pages/Id.jsx'
import Transation from './pages/Transation.jsx'
import FormStatus from './pages/FormStatus.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Home />
    <LayOutEffect />
    <Ref />
    <Reducer />
    <Memo />
    <CallBack />
    <Id />
    <Transation />
    <FormStatus />
  </>
)
