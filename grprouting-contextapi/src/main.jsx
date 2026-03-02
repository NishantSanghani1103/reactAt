import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './common/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Error404 from './common/Error404';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MainContext from './MainContext';
import Cart from './pages/Cart';

createRoot(document.getElementById('root')).render(

  <MainContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          {/* <Route path='*' element={<Error404 />} /> */}

          {/* // or */}

          <Route path='*' element={<Navigate to={'/dashboard'} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </MainContext>

)
