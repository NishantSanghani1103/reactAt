import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactMemo from './hooks/ReactMemo/ReactMemo.jsx'
import UseMemo from './hooks/useMemo/UseMemo.jsx'
import UseCallBack from './hooks/useCallBack/UseCallBack.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReactMemo />
  },
  {
    path: "/usememo",
    element: <UseMemo />
  },
  {
    path: "/usecallback",
    element: <UseCallBack />
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
