import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MainLayout from './common/MainLayout.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Profile from './pages/Profile.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<DashBoard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<h1>Login</h1>} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
