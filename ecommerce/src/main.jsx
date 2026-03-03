import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/productDetails/ProductDetails';
import MainLayout from './common/MainLayout';
import Cart from './pages/cart/Cart';
import MainContext from './MainContext';

createRoot(document.getElementById('root')).render(

  <>
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext>
  </>

)
