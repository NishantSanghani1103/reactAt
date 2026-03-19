import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen.js"
import { TanStackDevtools } from '@tanstack/react-devtools'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'
const route = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={route} />
    <TanStackDevtools plugins={[formDevtoolsPlugin()]}/>
  </>
)
