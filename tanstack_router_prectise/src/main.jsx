import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRouter, Router, RouterProvider } from '@tanstack/react-router'
import { Route } from './routes/__root.jsx'
import {routeTree} from "./routeTree.gen.js"

const router = createRouter({ routeTree });

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
