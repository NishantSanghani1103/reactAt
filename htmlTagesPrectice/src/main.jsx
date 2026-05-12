import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Table from './pages/Table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <Table />
  </StrictMode>,
)
