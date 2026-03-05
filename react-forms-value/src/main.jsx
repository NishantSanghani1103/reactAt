import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormElement from './pages/FormElement.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DateBg from './task/DateBg.jsx'
import MultipleValues from './pages/MultipleValues.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormElement />} />
            <Route path='/date' element={<DateBg />} />
            <Route path='/multiValue' element={<MultipleValues />} />
        </Routes>
    </BrowserRouter>

)
