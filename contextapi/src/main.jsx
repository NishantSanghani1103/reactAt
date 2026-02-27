import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './common/MainLayout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import MainContext from './MainContext.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />}>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </MainContext>



  </>
)
