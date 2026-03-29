import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from "./routeTree.gen.js"
import AppProvider from './app/AppProvider.jsx';
const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
)
