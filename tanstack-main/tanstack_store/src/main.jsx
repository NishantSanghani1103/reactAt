import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRouter, RouterProvider } from '@tanstack/react-router'

import {routeTree} from "./routeTree.gen.js"

const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
